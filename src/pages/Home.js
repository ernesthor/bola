import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import Landing from '../components/Landing';
import AppNavbar from '../components/AppNavbar';
import SportsNavbar from '../components/SportsNavbar';
import Sands from '../components/Sands';
import ContactUs from '../components/ContactUs';
import Footer from '../components/Footer';

import './pages.css';

export default class Home extends Component {
  render () {
    return (
      <div className="bola-container">
        <div className="bola-content">
          <AppNavbar/>
          <Sands/>
          <SportsNavbar/>
          <Landing/>
        </div>
        <Footer/>
      </div>
    )
  }
}
