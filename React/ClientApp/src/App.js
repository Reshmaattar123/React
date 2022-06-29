import React, { Component } from 'react';
import { Route } from 'react-router';
//import { Layout } from './components/Layout';
import { Home } from './components/Home';
//import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import Customer from './components/MvpCrud/Customer';
import Product from './components/MvpCrud/Product';
import store from './components/MvpCrud/store';
import Sales from './components/MvpCrud/Sales';
//import Store from './components/Store/store';
import { Layout } from './components/Layout';
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
       
        <Route exact path='/counter' component={Counter}  />
        <Route exact path='/customer' component={Customer}  />
        <Route exact path='/product' component={Product} />
        <Route exact path='/store' component={store} />
        <Route exact path='/sales' component={Sales} />
        
      </Layout>
    );
  }
}
