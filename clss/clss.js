import React, { Component } from 'react'

export class Clss extends Component {

    constructor()
    {
        super();
        this.state = {
            title:'hello fabevy',
        }
    }

    clc = () => {
        this.setState({title : 'front end develper'});
    }

  render() {
    return (
      <div>
        <p>{this.state.title}</p>
        <button onClick={() => this.clc()}>change</button>
      </div>
    )
  }
}

export default Clss
