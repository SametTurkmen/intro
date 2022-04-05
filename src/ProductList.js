import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class ProductList extends Component {


  render() {
    return (
      <div>
        <h3>
          {this.props.info.title}-{this.props.currentCategory}
        </h3>
        <Table bordered>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Name</th>
              <th>Quantity Per Unit</th>
              <th>Unit Price</th>
              <th>Units In Stock</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th>{product.id}</th>
                <td>{product.productName}</td>
                <td>{product.quantityPerUnit}</td>
                <td>{product.unitPrice}</td>
                <td>{product.unitsInStock}</td>
                <td><div>
                  <Button
                    onClick={() => this.props.addToCart(product)}
                    color="primary">Add to Cart</Button>
                </div></td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}
