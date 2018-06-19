import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button, Alert } from 'react-bootstrap';

export default class SignUp extends Component {
  render () {
    return (
      <Grid>
      <Alert bsStyle="warning">
        <h1><strong>Page Not Found</strong></h1>
        <h3>Page is under construction please go back to Home</h3>
        <Link to href="/" to="/"> Go back to home </Link>
      </Alert>
      </Grid>
    )
  }
}
