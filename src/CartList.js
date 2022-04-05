import React, { Component } from 'react'
import { Badge, Table, Button } from 'reactstrap'
export default class CartList extends Component {

  renderCart() {
    return (

      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>CategoryId</th>
            <th>Product Name</th>
            <th>Quantity Per Unit</th>
            <th>Unit Price</th>
            <th>Units In Stock</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            this.props.cart.map(
              (cartItem) => (
                <tr key={cartItem.product.id}>
                  <td>{cartItem.product.id}</td>
                  <td>{cartItem.product.categoryId}</td>
                  <td>{cartItem.product.productName}</td>
                  <td>{cartItem.product.quantityPerUnit}</td>
                  <td>{cartItem.product.unitPrice}</td>
                  <td>{cartItem.product.unitsInStock}</td>
                  <td><Badge pill style={{ fontSize: "14px" }} color='info'>{cartItem.quantity}</Badge></td>
                  <td><Button onClick={() => this.props.removeFromCart(cartItem.product)} style={{ fontSize: "12px" }} color='outline-danger'>Remove</Button></td>
                </tr>
              )
            )
          }
        </tbody>

      </Table>
    )
  }

  render() {
    return (
      <div>{this.renderCart()}</div>
    )
  }
}
