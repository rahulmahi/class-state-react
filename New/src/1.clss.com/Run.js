import React, { Component } from "react";
import "./run.css"
export class Run extends Component {

  render() {
    return (
      <div>
      </div>
    );
  }
}

export default Run;

export class CartItem extends Run {
Cart()
{
  this.state.cartItem.push(this)

   console.log(this.state.cartItem);
}
  render() {
    return (
      <div className="parent">
        <div className="butn">
          <img src={require('../images/bat.webp')} /><br />
          <button onClick={() => this.Cart()}>ADD TO CART</button>
          <button>REMOVE</button>
        </div>
       <div>
        <p>{this.props.val}</p>
        <p>{this.props.val1}</p>
        <img src={this.props.val2}/>
        <span>{this.props.val3}</span><br />
        <img src={this.props.val2}/>
        <span>{this.props.val4}</span><br />
        <img src={this.props.val2}/>
        <span>{this.props.val5}</span><br />
        <img src={this.props.val2}/>
        <span>{this.props.val6}</span> 
      </div>
    </div>
    );
  }
}
