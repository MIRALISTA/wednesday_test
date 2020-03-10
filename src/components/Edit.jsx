import React, { Component } from "react";

export default class Edit extends Component {
  render() {
    return (
      <div>
        <h1>Edit employee {this.props.uuid}</h1>
      </div>
    );
  }
}
