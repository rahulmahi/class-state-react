import React, { Component } from "react";
import Secondclss from "../secondclss/secondclss";
import Secondview from "../secondview/Secondview";

export class Firstclss extends Component {
  constructor() {
    super();
    this.state = {
      item: [
        {
          item1:
            "ironspots KOOKABURRA Kahuna Full Size ( Poplar Willow) Cricket Bat Poplar Willow Cricket Bat  (1 kg)",
          item2: "Available offers",
          imges: require("../images/icon.webp"),

          item3:
            "Special PriceGet extra 4% off (price inclusive of cashback/coupon)T&C",
          item4: "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
          quantity: 1,
        },
        {
          item1:
            "ironspots KOOKABURRA Kahuna Full Size ( Poplar Willow) Cricket Bat Poplar Willow Cricket Bat  (1 kg)",
          item2: "Available offers",
          imges: require("../images/icon.webp"),

          item3:
            "Special PriceGet extra 4% off (price inclusive of cashback/coupon)T&C",
          item4: "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
          quantity: 1,
        },
        {
          item1:
            "ironspots KOOKABURRA Kahuna Full Size ( Poplar Willow) Cricket Bat Poplar Willow Cricket Bat  (1 kg)",
          item2: "Available offers",
          imges: require("../images/icon.webp"),

          item3:
            "Special PriceGet extra 4% off (price inclusive of cashback/coupon)T&C",
          item4: "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
          quantity: 1,
        },
        {
          item1:
            "ironspots KOOKABURRA Kahuna Full Size ( Poplar Willow) Cricket Bat Poplar Willow Cricket Bat  (1 kg)",
          item2: "Available offers",
          imges: require("../images/icon.webp"),

          item3:
            "Special PriceGet extra 4% off (price inclusive of cashback/coupon)T&C",
          item4: "Bank Offer5% Cashback on Flipkart Axis Bank CardT&C",
          quantity: 1,
        },
      ],
      cartItem: [],
    };
  }

  fun = (value) => {
    if (!this.state.cartItem.includes(value)) {
      let arr = this.state.cartItem.slice();
      arr.push(value);
      this.setState({ cartItem: arr });
    } else {
      this.setState({ quantity: value.quantity++ });
      console.log(this.state.cartItem);
    }
  };

  remove = (removeValue) => {
    console.log(removeValue);
    const show = this.state.cartItem.filter((removeFilter) => {
      return removeFilter !== removeValue;
    });
    console.log(this.state.cartItem);
    this.setState({ cartItem: show });
  };

  render() {
    return (
      <div className="container">
        <div>
          {this.state.item.map((val, index) => (
            <Secondclss
              key={index}
              val={val.item1}
              val1={val.item2}
              val2={val.imges}
              val3={val.item3}
              val4={val.item4}
              fun={this.fun}
              hold={val}
            />
          ))}
        </div>
        <div>
          {this.state.cartItem.map((val, index) => (
            <Secondview key={index} val={val} remo={this.remove} />
          ))}
        </div>
      </div>
    );
  }
}
export default Firstclss;
