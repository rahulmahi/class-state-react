import React, { Component } from 'react'

export class Lifecycle extends Component {
    constructor(){
    super()
    this.state = {
        name:'rahul'
    }
    }

    componentWillMount(){
        alert('hii');
    }

    componentDidMount(){
      setTimeout( () =>{
        this.setState({name:'mahi'});
      },3000)
    }
  render() {
    return (
      <div>my name is :{this.name}</div>
    )
  }
}

export default Lifecycle