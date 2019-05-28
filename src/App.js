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
    ServiceApi.getProductsList(this.state.actualPage)
    .then(response => {
        console.log(response)
        this.setState({ 
          products: response.data.result.data,
          totalCount: response.data.result.total_count
         })
    })
  }


  onPageForward = () => {
    this.setState(prevState => {
      return {actualPage: prevState.actualPage + 1}
    },
      () =>
      ServiceApi.getProductsList(this.state.actualPage)
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
    this.setState(prevState => {
      return {actualPage: prevState.actualPage - 1}
    },
      () =>
      ServiceApi.getProductsList(this.state.actualPage)
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
    let productsList = this.state.products;
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Homepage productsList={productsList} />} />
          <Route path='/products' render={() => <Products productsList={productsList} 
                                                          actualPage={this.state.actualPage}
                                                          onPageForward={this.onPageForward}
                                                          onPageBack={this.onPageBack}
                                                          totalCount={this.state.totalCount} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
