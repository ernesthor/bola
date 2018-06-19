import React, { Component } from 'react';
import {  Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './components.css'
export default class SportsNavbar extends Component {
  render () {
    return (
      <Navbar default collapseOnSelect>
        <Navbar.Header>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav>
            <NavDropdown eventKey={1} componentClass={Link} title="PBA" id="nav-dropdown">
                <MenuItem eventKey={1.1} href="/pba" to="/pba">PBA</MenuItem>
                <MenuItem eventKey={1.2} href="/dleague" to="/dleague">D-League</MenuItem>
            </NavDropdown>
            <NavItem eventKey={2} componentClass={Link} href="/pvl" to="/pvl">
              PVL
            </NavItem>
            <NavDropdown eventKey={3} componentClass={Link} title="UAAP" id="nav-dropdown">
                <MenuItem eventKey={3.1} href="/uaap/basketball" to="/uaap/basketball">Basketball</MenuItem>
                <MenuItem eventKey={3.2} href="/uaap/volleyball" to="/uaap/volleyball">Volleyball</MenuItem>
                <MenuItem eventKey={3.3} href="/uaap/soccer" to="/uaap/soccer">Soccer</MenuItem>
                <MenuItem eventKey={3.4} href="/uaap/others" to="/uaap/others">Others</MenuItem>
            </NavDropdown>
            <NavDropdown eventKey={4} componentClass={Link} title="NCAA" id="nav-dropdown">
                <MenuItem eventKey={4.1} href="/ncaa/basketball" to="/ncaa/basketball">Basketball</MenuItem>
                <MenuItem eventKey={4.2} href="/ncaa/volleyball" to="/ncaa/volleyball">Volleyball</MenuItem>
                <MenuItem eventKey={4.3} href="/ncaa/others" to="/ncaa/others">Others</MenuItem>
            </NavDropdown>
            <NavItem eventKey={5} componentClass={Link}  href="/mpbl" to="/mpbl">
              MPBL
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}
