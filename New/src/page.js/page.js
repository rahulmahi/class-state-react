import React from "react";

const Page = () => {
  return (
    <div className="flx">
      <div>
        <img src={require("../images/React.png")} className="imgs" />
      </div>
      <div className="second">
        <input type={"search"} placeholder="Search...." className="input" />
        <span className="icon">
          <i className="fa fa-search"></i>
        </span>
        <i className="fa fa-shopping-cart" style={{marginRight:'10px',marginLeft:'20px',color:'white'}}></i>
        <span className="r">R</span>
      </div>
    </div>
  );
};

export default Page;
