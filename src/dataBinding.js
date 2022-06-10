import React, { Component } from "react";

class DataBinding extends Component {
  fullName = "Trung Hiếu";
  age = 12;
  email = "hieu@gmail.com";

  renderMessage() {
    const text = "Hello everyone.";
    return text;
  }

  showMessage() {
    console.log("Hello");
  }

  showMessageWithParams(message) {
    console.log(message);
  }

  render() {
    // SyntheticEvent
    return (
      <div>
        {/* <button onClick={this.showMessage}>Show</button> */}
        <button
          onClick={() => {
            this.showMessageWithParams("helllo");
          }}
        >
          Show
        </button>
        <h1>Demo Data binding</h1>
        <h2>Name: {this.fullName} </h2>
        <h2>Age: {this.age + 2}</h2>
        <h2>Email: {this.email}</h2>
        <p> {this.renderMessage()} </p>
      </div>
    );
  }
}

export default DataBinding;
