import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './Components/Products/Products';

class App extends Component {
  state = {
    products: [],
    actualPage: 1
  }

  componentDidMount() {
    axios.get(`https://qa-api.wovenlyrugs.com/products?page=1&page_size=12&size=runners&group=Rug`)
    .then(response => {
        console.log(response)
        this.setState({ 
          products: response.data.result.data
         })
    })
  }


  onPageForward = () => {
    this.setState(prevState => {
      return {actualPage: prevState.actualPage + 1}
    },
      () =>
        axios
          .get(
            `https://qa-api.wovenlyrugs.com/products?page=${
              this.state.actualPage
            }&page_size=12&size=runners&group=Rug`
          )
          .then(response => {
            this.setState({
              products: response.data.result.data,
            });
          })
          .catch(error => {
            console.log(error);
          })
    );
  }

  onPageBack = () => {
    this.setState(prevState => {
      return {actualPage: prevState.actualPage - 1}
    },
      () =>
        axios
          .get(
            `https://qa-api.wovenlyrugs.com/products?page=${
              this.state.actualPage
            }&page_size=12&size=runners&group=Rug`
          )
          .then(response => {
            this.setState({
              products: response.data.result.data,
            });
          })
          .catch(error => {
            console.log(error);
          })
    );
  }

  render() { 
    let productsList = this.state.products;
    
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Homepage productsList={productsList} />} />
          <Route path='/products' render={() => <Products productsList={productsList} 
                                                          onPageForward={this.onPageForward}
                                                          onPageBack={this.onPageBack} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
