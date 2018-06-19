import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

export default class Sands extends Component {
  render () {
    return (
        <Grid fluid={true}>
          <Row>
            <Carousel autoPlay={false} showThumbs={false} showStatus={false} showIndicators={false}>
              <div className="scores-content">
              <Col md={2}>
                <h4>Games for</h4>
                {new Date().getMonth()}/{new Date().getDate()}/{new Date().getFullYear()}

              </Col>
              <Col md={10}>

              </Col>
              </div>
              <div className="scores-content">
              <Col md={2}>
                <h4>Games for</h4>
                {new Date().getMonth()}/{new Date().getDate()+1}/{new Date().getFullYear()}

              </Col>
              <Col md={10}>
                
              </Col>
              </div>
              <div className="scores-content">
              <Col md={2}>
                <h4>Games for</h4>
                {new Date().getMonth()}/{new Date().getDate()+2}/{new Date().getFullYear()}

              </Col>
              <Col md={10}>

              </Col>
              </div>
            </Carousel>
          </Row>
        </Grid>
    )
  }
}
