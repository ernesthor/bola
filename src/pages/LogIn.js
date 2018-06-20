import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';

import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import LogInForm from '../components/LogInForm';

export default class LogIn extends Component {
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
                  <h2 className="form-header"> Log In </h2>
                  <LogInForm/>
                  <Link to="/recover" href="/recover"> Forgot password? </Link>
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
