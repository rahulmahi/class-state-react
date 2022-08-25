import React, { Component } from "react";

export class Secondclss extends Component {
  
    fun = () => {
        this.props.fun(this.props.hold)
            console.log('hii');
    }
  render() {
    return (
      <div className="parent">
        <div className="butn">
          <img src={require("../images/bat.webp")}  alt = "Load"/>
          <br />
          <div className="qty">
          <button onClick={this.fun}>ADD TO CART</button>
          </div>
        </div>
        <div className="load">
          <p>{this.props.val}</p>
          <p>{this.props.val1}</p>
          <img src={this.props.val2} alt = "Load"/>
          <span>{this.props.val3}</span>
          <br />
          <img src={this.props.val2} alt = "Load"/>
          <span>{this.props.val4}</span>
          <br />
        </div>
      </div>
    );
  }
}

export default Secondclss;
