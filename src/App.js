import React, { Component } from "react";
import "./App.css";
import Counters from "./components/counters";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 8 },
      { id: 3, value: 0 },
      { id: 4, value: 2 },
    ],
    tags: ["Welcome Back Again.....", "Thanks for Shopping!!"],
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };
  handleDelete = (counterid) => {
    const counters = this.state.counters.filter((c) => c.id !== counterid);
    this.setState({ counters });
  };
  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  handleTags = () => {
    if (this.state.tags.length === 0) return "Please Insert some Tags";
    return (
      <ul style={{ listStyle: "none", textAlign: "center", fontSize: 20 }}>
        {this.state.tags.map((tag) => {
          return <li key={tag}>{tag}</li>;
        })}
      </ul>
    );
  };
  render() {
    return (
      <React.Fragment>
        <NavBar
          totalCounters={this.state.counters.filter((c) => c.value > 0).length}
        />
        <main className="container">
          <Counters
            counters={this.state.counters}
            tags={this.handleTags}
            onReset={this.handleReset}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
