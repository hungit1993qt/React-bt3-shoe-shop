import React, { Component } from "react";
import ProductList from "./ProductList";
import ProductDetail from "./ProductDetail";
import ProductCart from "./ProductCart";
import data from "./data.json";

export default class FPTShop extends Component {
  state = {
    selectedProduct: null,
    carts: [], 
  };

  handleSelectProduct = (product) => {
    console.log(product);
    this.setState({ selectedProduct: product });
  };

  handleBuyProduct = (product) => {
    const index = this.state.carts.findIndex((item) => item.id === product.id);

    if (index === -1) {
      this.setState((state) => ({
        carts: [...state.carts, { ...product, quantity: 1 }],
      }));
    } else {
      const carts = [...this.state.carts];
      carts[index].quantity += 1;
      this.setState({ carts });
    }
  };

  handleDeleteProductFromCart = (productId) => {
    const carts = this.state.carts.filter((item) => item.id !== productId);
    this.setState({ carts });
  };

  handleChangeProductQuantity = (productId, value) => { const carts = this.state.carts.map((item) => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + value };
      }
      return item;
    });
    this.setState({ carts });
  };

  render() {
    return (
      <div className="container">
        <h1 className="text-center">FPT Shop</h1>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#cart-modal"
          >
            Giỏ hàng
          </button>
        </div>
        <ProductList
          products={data}
          onSelect={this.handleSelectProduct}
          onBuy={this.handleBuyProduct}
        />
        <ProductDetail product={this.state.selectedProduct} />
        <ProductCart
          carts={this.state.carts}
          onDelete={this.handleDeleteProductFromCart}
          onChangeQuantity={this.handleChangeProductQuantity}
        />
      </div>
    );
  }
}
