import React, { Component } from 'react';
import {  Navbar, Nav, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './components.css'

export default class AppNavbar extends Component {
  render () {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Brand>
            <Link to="/">Bola</Link>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              Home
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/about" to="/about">
              About
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/news" to="/news">
              News
            </NavItem>
            <NavItem eventKey={4} componentClass={Link}  href="/signup" to="/signup">
              Sign Up
            </NavItem>
            <NavItem eventKey={5} componentClass={Link}  href="/login" to="/login">
              Log In
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}