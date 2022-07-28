import React, { Component } from "react";

export default class Counterss extends Component {
  constructor(props) {
    super(props);
    console.log("initalised");
  }

  state = {
    counter: 10,
    color: "crimson",
  };
  Increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  Decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  componentWillmount() {
    console.log("components will about to moount ");
  }

  componentDidMount() {
    console.log("hello");
  }

  componentDidUpdate() {
    console.log("components will updated");
  }

  componentWillUnmount() {
    console.log("componeent is unmount");
  }

  render() {
    return (
      <div>
        <button onClick={this.Increment}>+</button>
        {this.state.counter}
        <button onClick={this.Decrement}>-</button>
        <button onClick={() => this.props.idUpdateCounter(id)}>Delete{}</button>
      </div>
    );
  }
}
