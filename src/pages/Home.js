import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner1 = './assets/header.jpg';
const Banner2 = './assets/header2.jpg';
const Banner3 = './assets/header3.jpg';

export default class Home extends Component {
  render () {
    return (
      <div>
        <Grid fluid={true}>
          <Row>
            <Carousel autoPlay={true} showThumbs={false} showStatus={false} transitionTime={1000} interval={10000} infiniteLoop={true}>
              <div className="carousel-content">
                <img src={Banner1} />
                <div className="header">
                  <h1> Be updated on Scores, News, and Others</h1>
                  <h2> Where ever you are. Sign Up now! </h2>
                  <Button to="/signup"> Sign Up </Button>
                </div>
              </div>
              <div className="carousel-content">
                <img src={Banner2} />
                <div className="header">
                  <h1> Fast and Easy </h1>
                  <h2> Just go to our site or download our app </h2>
                  <Button to="/signup"> Sign Up </Button>
                </div>
              </div>
              <div className="carousel-content">
                <img src={Banner3} />
                <div className="header">
                  <h1> Personalize your account </h1>
                  <h2> You can choose team or league to follow </h2>
                  <Button to="/signup"> Sign Up </Button>
                </div>
              </div>
            </Carousel>
          </Row>

          <Row>
            <h2> Join Us and Earn Rewards! </h2>
          </Row>

        </Grid>
      </div>
    )
  }
}
