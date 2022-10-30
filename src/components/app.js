import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from "./Navbar";
import Home from "./pages/home";
import About from "./pages/about";
import Login from "./pages/login";
import ContactUs from "./pages/contact";
import Products from "./pages/product";
import Cart from "./pages/cart";
import Checkout from "./pages/checkout";
import NoMatch from "./pages/no-match";


export default class App extends Component {
  render() {
    return(
      <Router>
        <div>
            <Navbar />

          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products" component={Products} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/login" component={Login} />
            <Route path="/cart" component={Cart} />
            <Route path="/checkout" component={Checkout} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}


