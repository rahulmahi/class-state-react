import React, { Component } from "react";


export class Second extends Component {
  render() {
    return (
      <div>First

        {this.props.name}
      </div>

    )
  }
}

export class First extends Component {
  constructor() {
    super();
    this.state = {
      title: "React JS",
    };
  }

  sampleTask() {
    this.setState({
      title: "java",
    });
  }
  render() {
    return (
      <div>
        First {this.state.title}
        <button onClick={() => this.sampleTask()}>Click</button>
        <Second name={this.state.title}/>
      </div>
    );
  }
}

export default First;
