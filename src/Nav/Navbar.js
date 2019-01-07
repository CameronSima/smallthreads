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

const MyNavLink = ({ clickHandler, url, title }) => (
  <div onClick={clickHandler}>
    <NavItem>
      <Link to={url}>
        <NavLink>{title}</NavLink>
      </Link>
    </NavItem>
  </div>
)

export default class NavBar extends React.Component {

  state = {
    isOpen: false
  };

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  close = () => {
    this.setState({
      isOpen: false
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
            <MyNavLink
                url='/images/oldies/'
                title='Oldies'
                clickHandler={this.close}
              />
              <MyNavLink
                url='/images/people/'
                title='People'
                clickHandler={this.close}
              />
              <MyNavLink
                url='/images/interiors/'
                title='Interiors'
                clickHandler={this.close}
              />
              <MyNavLink
                url='/images/landscapes/'
                title='Landscapes'
                clickHandler={this.close}
              />
              <MyNavLink
                url='/images/stateless/'
                title='Stateless'
                clickHandler={this.close}
              />
              <MyNavLink
                url='/contact/'
                title='Contact'
                clickHandler={this.close}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

