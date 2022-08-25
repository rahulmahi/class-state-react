import React, { Component } from 'react'
// import Secondclss from '../secondclss/secondclss'

export class Secondview extends Component {
  remove = () =>{
         this.props.remo(this.props.val)
  }
  render() {
    return (
        <div className="parent">
        <div className="butn">
          <img src={require("../images/bat.webp")} alt="Loading"/>
          <br />
          <h2> quantity : {this.props.val.quantity}</h2>
          <button onClick={this.remove}>REMOVE</button>
        </div>
        <div>
          <p>{this.props.val.item1}</p>
          <p>{this.props.val.item2}</p>
          <img src={this.props.val.imges} alt = "Load"/>
          <span>{this.props.val.item3}</span>
          <br />
          <img src={this.props.val.imges} alt = "Load"/>
          <span>{this.props.val.item4}</span>
          <br />
        </div>
      </div>
    )
  }
}

export default Secondview