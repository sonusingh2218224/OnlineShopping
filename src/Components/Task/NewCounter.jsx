import React, { Component } from "react";
import Counterss from "./Counterss";

export default class NewCounter extends Component {
  state = {
    data: [
      {
        id: 1,
        initialValue: 5,
        color: "red",
      },
      {
        id: 2,
        initialValue: 5,
        color: "red",
      },
      {
        id: 3,
        initialValue: 5,
        color: "red",
      },
      {
        id: 4,
        initialValue: 5,
        color: "red",
      },
    ],
  };

  UpdateCounter = (id) => {
    let result = this.state.data.filter((c) => c.id !== id);
    this.setState({ data: result });
  };

  render() {
    return (
      <div>
        {this.state.data.map((counter) => (
          <Counterss
            key={counter.id}
            id={counter.id}
            initialValue={counter.initialValue}
            color={counter.color}
            deleteCounter={this.UpdateCounter}
          />
        ))}
      </div>
    );
  }
}
