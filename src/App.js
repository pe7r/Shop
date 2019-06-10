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
    totalCount: 0
  }

  componentDidMount() {
    const { actualPage } = this.state;
    ServiceApi.getProductsList(actualPage)
    .then(response => {
        this.setState({ 
          products: response.data.result.data,
          totalCount: response.data.result.total_count
         })
    })
  }

  changingPage = (cond) => {
    const {actualPage} = this.state;
    let nextPage;
    if (cond === 'next') {
      nextPage = actualPage + 1
    } else if (cond === 'prev') {
      nextPage = actualPage - 1
    }
    ServiceApi.getProductsList(nextPage)
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

  render() { 
    const { actualPage, totalCount, products } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Homepage productsList={products} />} />
          <Route path='/products' render={() => <Products productsList={products} 
                                                          actualPage={actualPage}
                                                          totalCount={totalCount}
                                                          changingPage={this.changingPage} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;