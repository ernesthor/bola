import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';

export default class News extends Component {
  render () {
    return (
      <Grid>
        <Jumbotron>
          <h2>News Update</h2>
        </Jumbotron>
      </Grid>
    )
  }
}
