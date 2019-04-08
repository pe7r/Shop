import React, { Component } from 'react';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import { BrowserRouter, Route } from 'react-router-dom';
import Category from './Components/Category/Category';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path='/' component={Homepage} />
          <Route path='/category' component={Category} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
