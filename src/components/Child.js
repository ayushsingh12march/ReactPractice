import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props); //
    console.log("hello");
  }
  render() {
    return (
      <div>
        <h2>_____________________________</h2>
        <h1> Child {this.props.name} </h1>
        <button onClick={() => this.props.bridge("hello world")}>
          Invoke parent though child
        </button>
      </div>
    );
  }
}
export default Child;
