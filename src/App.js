import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './components/Home';
import AppNavbar from './components/AppNavbar';
import SportsNavbar from './components/SportsNavbar';
import Sands from './components/Sands';
import About from './components/About';
import News from './components/News';
import ContactUs from './components/ContactUs';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="bola-container">
          <div className="bola-content">
            <AppNavbar/>
            <Sands/>
            <SportsNavbar/>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/news" component={News} />
            <Route path="/contact" component={ContactUs} />
            <Route path="/signup" component={SignUp} />
            <Route path="/login" component={LogIn} />
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
