import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import CartSummary from './CartSummary';
import { Link } from 'react-router-dom';

export default class Navi extends Component {
  render() {
    return (
      <div>
        <Navbar
          color="light"
          expand="md"
          fixed=""
          light
          className='mb-4'
        >
          <NavbarBrand href="/">
            Northwind App
          </NavbarBrand>
          <NavbarToggler onClick={function noRefCheck() { }} />
          <Collapse navbar>
            <Nav
              className="ms-auto"
              navbar
            >
              <NavItem>
                <Link to={"/form1"} >Form Demo</Link>
              </NavItem>
              <NavItem>
                <Link to='#' >Github</Link>
              </NavItem>

              <CartSummary
                cart={this.props.cart}
                removeFromCart={this.props.removeFromCart}
              />
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}
