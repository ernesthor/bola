import React, { Component } from 'react';
import {  Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './components.css'

const bolaLogo = './assets/bola-full-logo.png'

export default class AppNavbar extends Component {
  render () {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/"><img src={bolaLogo} className="bola-logo"/></Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link}  className="app-li" href="/signup" to="/signup">
              Sign Up
            </NavItem>
            <NavItem eventKey={2} componentClass={Link}  className="app-li" href="/login" to="/login">
              Log In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
