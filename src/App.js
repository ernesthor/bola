import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux'

import logo from './logo.svg';
import './App.css';
import store from './store'


import Home from './pages/Home';
import AppNavbar from './components/AppNavbar';
import SportsNavbar from './components/SportsNavbar';
import About from './components/About';
import News from './components/News';
import ContactUs from './components/ContactUs';
import SignUp from './pages/SignUp';
import LogIn from './pages/LogIn';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/contact" component={ContactUs} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </div>
      </Router>
      </Provider>
    );
  }
}

export default App;
