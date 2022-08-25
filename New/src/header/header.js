import React from "react";

const Header = () => {
  return (
    <div className="main">
      {/* <div className="neet"> */}
        <img src={require("../images/flip.png")} className="flip" />
        <br />
        <a style={{ color: "white" }}>Explore</a>
        <span className="plus">Plus</span>
        <a>
          <img src={require("../images/plus.png")} className="plus" />
        </a>
        <input
          type={"search"}
          className="input-box"
          placeholder="Search for products,brands and more"
        />
        <span className="search">
          <i class="fa fa-search"></i>
        </span>
        <button style={{margin:'10px 10px'}}>Login</button>
        {/* </div> */}
      {/* <div> */}
        <span style={{ color: "white"}}>Become a Seller</span>
        <span style={{ color: "white"}}>More</span>
        <span style={{ color: "white"}}>
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Cart
        </span>
      {/* </div> */}
    </div>
  );
};

export default Header;
