import React from "react";
import Food from "./food/food";
import image1 from "../src/images/food.webp";
import image2 from "../src/images/2.webp";
import image3 from "../src/images/3.cms";
import image4 from "../src/images/4.jpg";
import image5 from "../src/images/5.jpg";
import image6 from "../src/images/7.webp";

const arr = [
  { name: "GRIL", image: image1 },
  { name: "VEG RICE", image: image2 },
  { name: "BUTTER NON", image: image3 },
  { name: "BURKER", image: image4 },
  { name: "SAMBAR RICE", image: image5 },
  { name: "BIRIYANI", image: image6 },
];
const Parent = () => {
  return (
    <div className="pro">
      {arr.map((props, index) => (
        <Food obj={props.name} key={index} obj1 = {props.image} />
      ))}
    </div>
  );
};

export default Parent;
