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
    chosenFilters: []
  }

  componentDidMount() {
    const { actualPage } = this.state;
    ServiceApi.getProductsList(actualPage, [], [])
    .then(response => {
        this.setState({ 
          products: response.data.result.data,
          totalCount: response.data.result.total_count
         })
    })
  }

  changingPage = (cond) => {
    const {actualPage, chosenFilters} = this.state;
    let nextPage;
    if (cond === 'next') {
      nextPage = actualPage + 1
    } else if (cond === 'prev') {
      nextPage = actualPage - 1
    }
    ServiceApi.getProductsList(nextPage, chosenFilters)
          .then(response => {
            this.setState({
              products: response.data.result.data,
              actualPage: nextPage
            })
          })
          .catch(error => {
            console.log(error);
          })
    window.scrollTo(0,0)
  }

  onFilterProducts = (allChosenFilters) => {
    this.setState({
      chosenFilters: allChosenFilters
    })
    ServiceApi.getProductsList(1, allChosenFilters)
    .then(response => {
      this.setState({
        products: response.data.result.data,
        totalCount: response.data.result.total_count,
        actualPage: 1
      })
    })
    .catch(error => {
      console.log(error);
    })
  }

  render() { 
    const { actualPage, totalCount, products } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Homepage productsList={products} />} />
          <Route path='/products' render={() => <Products productsList={products} 
                                                          actualPage={actualPage}
                                                          totalCount={totalCount}
                                                          changingPage={this.changingPage}
                                                          onFilterProducts={this.onFilterProducts} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;