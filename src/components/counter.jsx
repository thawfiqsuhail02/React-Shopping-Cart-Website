import React, { Component } from "react";
class Counter extends Component {
  render() {
    console.log(this.props.counter);
    return (
      <div className="row">
        <span
          style={{ fontSize: 25, fontWeight: "bold" }}
          className={this.getBadgeClass()}
        >
          {this.formatValue()}
        </span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary m-2 col-sm-1"
        >
          +
        </button>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary m-2 col-sm-1"
          disabled={!this.props.counter.value}
        >
          -
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger m-2 col-sm-1"
        >
          X
        </button>
      </div>
    );
  }

  getBadgeClass() {
    let classes = "badge m-2 col-sm-1 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatValue() {
    const { value } = this.props.counter;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;
