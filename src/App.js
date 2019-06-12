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
    isLoading: true
  }

  componentDidMount() {
    const { actualPage } = this.state;
    setTimeout(() => ServiceApi.getProductsList(actualPage, [], [])
      .then(response => {
          this.setState({ 
            products: response.data.result.data,
            totalCount: response.data.result.total_count,
            isLoading: false
          })
      }),
      1600)
  }

  changingPage = (cond) => {
    const {actualPage, chosenFilters} = this.state;
    this.setState({
      isLoading: true
    })
    let nextPage;
    if (cond === 'next') {
      nextPage = actualPage + 1
    } else if (cond === 'prev') {
      nextPage = actualPage - 1
    }
    setTimeout(() => ServiceApi.getProductsList(nextPage, chosenFilters)
      .then(response => {
        this.setState({
          products: response.data.result.data,
          actualPage: nextPage,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error);
      }),
      1600)
    
    window.scrollTo(0,0)
  }

  onFilterProducts = (allChosenFilters) => {
    this.setState({
      chosenFilters: allChosenFilters,
      isLoading: true
    })
    setTimeout(() => ServiceApi.getProductsList(1, allChosenFilters)
      .then(response => {
        this.setState({
          products: response.data.result.data,
          totalCount: response.data.result.total_count,
          actualPage: 1,
          isLoading: false
        })
      })
      .catch(error => {
        console.log(error);
      }),
      1600)
    
  }

  render() { 
    const { actualPage, totalCount, products, isLoading } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Homepage productsList={products}
                                                        isLoading={isLoading} />} />
          <Route path='/products' render={() => <Products productsList={products} 
                                                          actualPage={actualPage}
                                                          totalCount={totalCount}
                                                          changingPage={this.changingPage}
                                                          onFilterProducts={this.onFilterProducts}
                                                          isLoading={isLoading} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;