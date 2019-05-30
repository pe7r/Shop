import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './Components/Products/Products';
import ServiceApi from './ServiceApi';

class App extends Component {

  serviceApi = new ServiceApi();
  
  state = {
    products: [],
    actualPage: 1,
    totalCount: 0
  }

  componentDidMount() {
    const { actualPage } = this.state;
    ServiceApi.getProductsList(actualPage)
    .then(response => {
        console.log(response)
        this.setState({ 
          products: response.data.result.data,
          totalCount: response.data.result.total_count
         })
    })
  }

  onPageForward = () => {
    const { actualPage } = this.state;
    this.setState(prevState => {
      return {actualPage: prevState.actualPage + 1}
    },
      () =>
      ServiceApi.getProductsList(actualPage)
          .then(response => {
            this.setState({
              products: response.data.result.data,
            });
          })
          .catch(error => {
            console.log(error);
          })
    );
    window.scrollTo(0, 0)
  }

  onPageBack = () => {
    const { actualPage } = this.state;
    this.setState(prevState => {
      return {actualPage: prevState.actualPage - 1}
    },
      () =>
      ServiceApi.getProductsList(actualPage)
          .then(response => {
            this.setState({
              products: response.data.result.data,
            });
          })
          .catch(error => {
            console.log(error);
          })
    );
    window.scrollTo(0, 0)
  }

  render() { 
    const { actualPage, totalCount, products } = this.state;
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Homepage productsList={products} />} />
          <Route path='/products' render={() => <Products productsList={products} 
                                                          actualPage={actualPage}
                                                          onPageForward={this.onPageForward}
                                                          onPageBack={this.onPageBack}
                                                          totalCount={totalCount} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;