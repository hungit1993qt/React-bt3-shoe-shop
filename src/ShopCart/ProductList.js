import React, { Component } from "react";

export default class ProductList extends Component {
  render() {
    const { products, onSelect, onBuy } = this.props;

    return (
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-sm-4">
            <div className="card">
              <img src={product.image} alt={product.name} />
              <div className="card-body">
                <div className="card-title">{product.name}</div>
                <p className="card-text">{product.price}</p>
                <button
                  className="btn btn-success"
                  onClick={() => onSelect(product)}
                >
                  Xem Chi Tiết
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => onBuy(product)}
                >
                  Thêm Giỏ Hàng
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
