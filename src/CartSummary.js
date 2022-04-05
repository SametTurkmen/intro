import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Badge,
  NavItem,
  NavLink,
} from 'reactstrap';

export default class CartSummary extends Component {
  renderSummary() {
    return (
      <UncontrolledDropdown inNavbar nav >
        <DropdownToggle caret nav >
          Your Cart - <Badge>{this.props.cart.length}</Badge>
        </DropdownToggle>
        <DropdownMenu>
          {this.props.cart.map((cartItem) => (
            <DropdownItem key={cartItem.product.id}>
              <Badge color='danger' onClick={() => this.props.removeFromCart(cartItem.product)}>x</Badge>
              {" " + cartItem.product.productName + " "}
              <Badge color='info'>{cartItem.quantity}</Badge>
            </DropdownItem>))}
          <DropdownItem divider />
          <DropdownItem >
            <Link to='cart' > Go to cart</Link>
          </DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>

    )
  }

  renderEmptyCart() {
    return (
      <div>
        <NavItem>
          <NavLink>Empty Cart</NavLink>
        </NavItem>
      </div>
    )
  }
  render() {
    return (
      <div>
        {this.props.cart.length > 0 ? this.renderSummary() : this.renderEmptyCart()}
      </div>
    )
  }
}
