import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { Link } from "react-router-dom";

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar color="white" light expand="md">
          <Link to='/'>
            <NavbarBrand href="/">Small Threads</NavbarBrand>
          </Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to='/images/oldies/'>
                  <NavLink>Oldies</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/images/people/'>
                  <NavLink>People</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/images/interiors/'>
                  <NavLink>Interiors</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/images/landscapes'>
                  <NavLink>Landscapes</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/images/stateless/'>
                  <NavLink>Stateless</NavLink>
                </Link>
              </NavItem>
              <NavItem>
                <Link to='/contact/'>
                  <NavLink>Contact</NavLink>
                </Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

