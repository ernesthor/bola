import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Home from './pages/Home';
import AppNavbar from './components/AppNavbar';
import SportsNavbar from './components/SportsNavbar';
import Sands from './components/Sands';
import About from './components/About';
import News from './components/News';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <AppNavbar/>
          <Sands/>
          <SportsNavbar/>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/news" component={News} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LogIn} />
        </div>
      </Router>
    );
  }
}

export default App;
