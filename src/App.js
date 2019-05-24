import React, { Component } from 'react';
import axios from 'axios'
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Products from './Components/Products/Products';

class App extends Component {
  state = {
    products: [],
    sizes: []
  }

  componentDidMount() {
    axios.get('https://qa-api.wovenlyrugs.com/products?page=1&page_size=12&size=runners&group=Rug')
    .then(response => {
        console.log(response)
        this.setState({ 
          products: response.data.result.data
         })
    })
  }

  render() { 
    let productsList = this.state.products;
    
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' render={() => <Homepage productsList={productsList} />} />
          <Route path='/products' render={() => <Products productsList={productsList} />} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
