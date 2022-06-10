import React, { Component } from "react";
import styles from "./demoState.module.css";

class DemoState extends Component {
  //   renderHeader() {
  //     if (this.state.isLoggedIn) {
  //       return <p>Hello, friend.</p>;
  //     }
  //     return (
  // <div>
  //   <button>Đăng ký</button>
  //   <button>Đăng nhập</button>
  // </div>
  //     );
  //   }

  state = {
    isLoggedIn: false,
  };

  handleLogin = () => {
    // immutable:
    this.setState(
      {
        isLoggedIn: true,
      },
      () => {
        console.log(this.state.isLoggedIn);
      }
    );
  };

  addClass = (...classes) => {
    return classes.join(" ");
  };

  render() {
    console.log(styles);
    return (
      <div className={this.addClass(styles.container, styles.wrapper)}>
        <h1
          style={{
            backgroundColor: "#ff0000",
            fontSize: 50,
          }}
        >
          Demo State
        </h1>
        {/* { this.renderHeader() } */}

        {this.state.isLoggedIn ? (
          <p className={styles.message}>Hello, friend.</p>
        ) : (
          <div>
            <button>Đăng ký</button>
            <button onClick={this.handleLogin}>Đăng nhập</button>
          </div>
        )}
      </div>
    );
  }
}

export default DemoState;
