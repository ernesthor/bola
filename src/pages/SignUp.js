import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';

import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import SignUpForm from '../components/SignUpForm';

import './pages.css';

export default class SignUp extends Component {
  render () {
    return (
      <div className="bola-container">
        <div className="bola-content">
          <AppNavbar/>
          <Grid>
            <Row>
              <Col md={3}>

              </Col>
              <Col md={6}>
                <div className="form-container">
                  <h2 className="form-header"> Sign up with Bola </h2>
                  <SignUpForm/>
                </div>
              </Col>
              <Col md={3}>

              </Col>
            </Row>
          </Grid>
        </div>
        <Footer/>
      </div>
    )
  }
}
