import React from "react";

const sty = {
  height: "250px",
  width: "400px",
  backGroundSize: "cover",
  marginTop: "20px",
};
const Food = (prop) => {
  return (
    <div className="local" style={{marginBottom:'20px'}}>
      <img src={prop.obj1} style={sty}/>
      <h1>{prop.obj}</h1>
      <p>
        img elements must have an alt prop, either with meaningful text, or an
        empty string for decorative images.img elements must have an alt prop,
        either with meaningful text, or an empty string for decorative images
      </p>
      <div className="icons">
        <div>
            <span><i className="fa fa-heart" style={{color:'red'}}></i></span>
            <span><i className="fa fa-share-alt" style={{marginLeft:'10px',color:'red'}}></i></span>
        </div>
        <div>
            <span><i className="fa fa-shopping-cart" style={{color:'red',marginRight:'10px'}}></i></span>
        </div>
      </div>
    </div>
  );
};

export default Food;
