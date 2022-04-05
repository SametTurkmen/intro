import React, { Component } from "react";
import CategoryList from "./CategoryList";
import Navi from "./Navi";
import ProductList from "./ProductList";
import { Container, Row, Col } from "reactstrap";
import alertify from "alertifyjs";
import { Route, Routes } from 'react-router-dom';
import NotFound from "./NotFound";
import CartList from "./CartList";
import FormDemo1 from "./FormDemo1";

export default class App extends Component {
  state = {
    currentCategory: "",
    products: [],
    cart: []
  };


  addToCart = (product) => {
    let newCart = this.state.cart;
    let addedItem = newCart.find(item => item.product.id === product.id);
    if (addedItem) {
      addedItem.quantity++;
    }
    else {
      newCart.push({ product: product, quantity: 1 });
    }
    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart", 2);
  }

  removeFromCart = (product) => {
    let newCart = this.state.cart;
    let removedItem = newCart.find(item => item.product.id === product.id);
    newCart.splice(newCart.indexOf(removedItem), 1);
    this.setState({ cart: newCart });
    alertify.error(product.productName + " removed from cart", 2);
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts(categoryId) {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId;
    }
    fetch(url)
      .then((response) => response.json()) // convert to json
      .then((data) => {
        this.setState({ products: data });
      }); // set state
  }

  changeCategory = (category) => {
    this.setState({ currentCategory: category.categoryName });
    this.getProducts(category.id);
  };

  render() {
    let CategoryInfo = { title: "Category List" };
    let ProductInfo = { title: "Product List" };
    return (
      <div>
        <Container>
          <Row>
            <Navi cart={this.state.cart}
              removeFromCart={this.removeFromCart}
            />
          </Row>
          <Row>
            <Col xs="3">
              <CategoryList
                currentCategory={this.state.currentCategory}
                selectCategory={this.changeCategory}
                info={CategoryInfo}
              />
            </Col>
            <Col xs="9">
              <Routes>
                <Route exact path="/" element={<ProductList
                  products={this.state.products}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory}
                  selectCategory={this.changeCategory}
                  info={ProductInfo}
                />} />
                <Route exact path="/cart" element={<CartList
                  cart={this.state.cart}
                  removeFromCart={this.removeFromCart}
                />} />
                <Route path="/form1" element={<FormDemo1/>}/>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
