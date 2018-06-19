import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Row, Col, Image, Button } from 'react-bootstrap';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


const Banner1 = './assets/header.jpg';
const Banner2 = './assets/header2.jpg';
const Banner3 = './assets/header3.jpg';
const rewards = './assets/rewards.png';
const wager = './assets/wager.png';
const youtube = './assets/youtube.png';

export default class Home extends Component {
  render () {
    return (
        <Grid fluid={true}>
        <div>
          <Row>
            <Carousel autoPlay={true} showThumbs={false} showStatus={false} transitionTime={1000} interval={10000} infiniteLoop={true}>
              <div className="carousel-content">
                <img src={Banner1} />
                <div className="banner-header">
                  <h1> Be updated on Scores, News, and Others</h1>
                  <h2> Where ever you are. Sign Up now! </h2>
                  <Button className="banner-btn" href="/signup" to="/signup"> Sign Up </Button>
                </div>
              </div>
              <div className="carousel-content">
                <img src={Banner2} />
                <div className="banner-header">
                  <h1> Fast and Easy </h1>
                  <h2> Just go to our site or download our app </h2>
                  <Button className="banner-btn" href="/signup" to="/signup"> Sign Up </Button>
                </div>
              </div>
              <div className="carousel-content">
                <img src={Banner3} />
                <div className="banner-header">
                  <h1> Personalize your account </h1>
                  <h2> You can choose team or league to follow </h2>
                  <Button className="banner-btn" href="/signup" to="/signup"> Sign Up </Button>
                </div>
              </div>
            </Carousel>
          </Row>
        </div>
        <div className="container-fluid">
            <h2 className="header"> Join Us and Earn Rewards! </h2>
          <Row>
            <Col md={6}>
              <Row>
                <p className="earn-text">
                  When you&#39;re using our app you can <Link href="/points" to="/points">earn points</Link> to redeem rewards.
                </p>
              </Row>
              <Row>
                <Col md={6}>
                  <img src={rewards} className="earn-img"/>
                </Col>
                <Col md={6}>
                  <Button href="/store" to="/store" className="earn-link" className="earn-btn">Go to store</Button>
                </Col>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <p className="earn-text">
                  You can earn more points by supporting your team&#46; Wage and play your odds!
                </p>
              </Row>
              <Row>
                <Col md={6}>
                  <img src={wager} className="earn-img"/>
                </Col>
                <Col md={6}>
                  <Button href="/ingamebetting" to="/ingamebetting" className="earn-btn">Learn More...</Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-fluid">
            <h2 className="header"> Videos and Hightlights </h2>
          <Row className="vid-content">
            <Col md={6}>
              <img src={youtube} className="vid-img"/>
            </Col>
            <Col md={3}>
              <Row>
                <img src={youtube} className="vid-img2"/>
              </Row>
              <Row>
                <img src={youtube} className="vid-img2"/>
              </Row>
            </Col>
            <Col md={3}>
              <Row>
                <img src={youtube} className="vid-img2"/>
              </Row>
              <Row>
                <img src={youtube} className="vid-img2"/>
              </Row>
            </Col>
          </Row>
        </div>
        <div className="container-fluid">
            <h2 className="header"> News and Updates </h2>
          <Row className="news-content">

          </Row>
        </div>
        </Grid>
    )
  }
}
