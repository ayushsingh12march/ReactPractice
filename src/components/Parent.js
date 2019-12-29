import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  bridge = str => {
    window.alert("Parent is invoked  " + str);
  };
  render() {
    return (
      <Child name="ABC" bridge={this.bridge} /> //ABC is passed as a parent to child
    );
  }
}
export default Parent;
