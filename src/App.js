import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './Components/Products/Products';
import ServiceApi from './ServiceApi';

class App extends Component {
  
  state = {
    products: [],
    actualPage: 1,
    totalCount: 0,
    chosenFilters: [],
    chosenSort: '',
    isLoading: true,
    actualSort: 'Sort'
  }

  componentDidMount() {
    const { actualPage } = this.state; 
    ServiceApi.getProductsList(actualPage, [], [])
      .then(productsData => {
          this.setState({ 
            products: productsData.data.result.data,
            totalCount: productsData.data.result.total_count,
            isLoading: false
          })
      })
  }

  changingPage = (cond) => {
    const {actualPage, chosenFilters, chosenSort} = this.state;
    this.setState({
      isLoading: true
    })
    let nextPage;
    if (cond === 'next') {
      nextPage = actualPage + 1
    } else if (cond === 'prev') {
      nextPage = actualPage - 1
    }
    ServiceApi.getProductsList(nextPage, chosenFilters, chosenSort)
      .then(productsData => {
        this.setState({
          products: productsData.data.result.data,
          actualPage: nextPage,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error);
      })
    window.scrollTo(0,0)
  }

  onFilterProducts = (allChosenFilters) => {
    const {chosenSort} = this.state;
    this.setState({
      chosenFilters: allChosenFilters,
      isLoading: true
    })
    ServiceApi.getProductsList(1, allChosenFilters, chosenSort)
      .then(productsData => {
        this.setState({
          products: productsData.data.result.data,
          totalCount: productsData.data.result.total_count,
          actualPage: 1,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error);
      })
  }

  clearFilters = () => {
    ServiceApi.getProductsList(1, [], 'sort')
    .then(productsData => {
      this.setState({
        products: productsData.data.result.data,
        totalCount: productsData.data.result.total_count,
        actualPage: 1,
        isLoading: false,
        chosenFilters: []
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  onSortProducts = (chosenSortId, chosenSortName) => {
    const {chosenFilters} = this.state;
    this.setState({
      isLoading: true,
      actualSort: chosenSortName
    })
    ServiceApi.getProductsList(1, chosenFilters, chosenSortId)
    .then(productsData => {
      this.setState({
        products: productsData.data.result.data,
        totalCount: productsData.data.result.total_count,
        chosenSort: chosenSortId,
        actualPage: 1,
        isLoading: false
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() { 
    const { actualPage, totalCount, products, isLoading, actualSort } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Homepage isLoading={isLoading}
                                                        onSortProducts={this.onSortProducts}
                                                        onFilterProducts={this.onFilterProducts}/>} />
          <Route path='/products' render={() => <Products productsList={products} 
                                                          actualPage={actualPage}
                                                          totalCount={totalCount}
                                                          changingPage={this.changingPage}
                                                          onFilterProducts={this.onFilterProducts}
                                                          isLoading={isLoading}
                                                          onSortProducts={this.onSortProducts}
                                                          actualSort={actualSort}
                                                          clearFilters={this.clearFilters} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;