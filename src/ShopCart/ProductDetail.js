import React, { Component } from "react";

export default class ProductDetail extends Component {
  render() {
    const { product } = this.props;

    if (!product) {
      return null;
    }

    return (
      <div className="row">
        <div className="col-sm-4">
          <h3>{product.name}</h3>
          <img src={product.image} alt={product.name} width="100%" height="400px" />
        </div>
        <div className="col-sm-8">
          <h3>Thông số kĩ thuật</h3>
          <table className="table">
            <tbody>
              <tr>
                <td>Màn hình</td>
                <td>{product.display}</td>
              </tr>
              <tr>
                <td>Hệ điều hành</td>
                <td>{product.os}</td>
              </tr>
              <tr>
                <td>Camera trước</td>
                <td>{product.cameraFront}</td>
              </tr>
              <tr>
                <td>Camera sau</td>
                <td>{product.cameraBack}</td>
              </tr>
              <tr>
                <td>RAM</td>
                <td>{product.ram}</td>
              </tr>
              <tr>
                <td>ROM</td>
                <td>{product.rom}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
