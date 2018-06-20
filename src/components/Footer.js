import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Row, Col, Image, Button } from 'react-bootstrap';

const bolaLogo = './assets/bola-full-logo.png'

export default class Footer extends Component {
  render () {
    return (
        <footer className="footer white">
          <Grid fluid={true}>
            <Row className="center">
              <Col md={2}>
                <Link to="/"><img src={bolaLogo} className="footer-logo"/></Link>
              </Col>
              <Col md={4}>
                <span className="footer-copy">Bola Sports App &#169; {new Date().getFullYear()}&nbsp;&nbsp;&nbsp;</span>
                <span className="footer-copy">Designed by: <strong> ThorTechTips </strong> </span>
              </Col>
              <Col md={6} className="footer-menu">
                <Link href="/" to="/"> Home </Link>
                <Link href="/about" to="/about"> About </Link>
                <Link href="/contact" to="/contact"> Contact Us </Link>
                <Link href="/terms" to="/terms"> Terms and Condition </Link>
                <Link href="/privacy" to="/privacy"> Privacy </Link>
              </Col>
            </Row>
          </Grid>
        </footer>

    )
  }
}
