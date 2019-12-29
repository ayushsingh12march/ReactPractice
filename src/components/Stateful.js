import React, { Component } from "react";

class Stateful extends Component {
  state = {
    name: "xyz",
    age: 19
  };
  fun = e => {
    //e is an implicit argument,
    //window.alert('Clicked button');
    let myName = "Ayush";
    this.setState({
      name: myName
    });
  };

  render() {
    let { name, age } = this.state;
    return (
      <div>
        {console.log(name)}
        <h1>
          Stateful {name} age {this.state.age}{" "}
        </h1>
        <button onClick={this.fun}>Change</button>
      </div>
    );
  }
}
export default Stateful;
