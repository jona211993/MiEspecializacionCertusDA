import React from "react";
import { Carousel } from "antd";
import "./banner.css";

function Banner() {
  return (
    <Carousel autoplay>
      <div className="cont-img"></div>
      <div className="cont-img2"></div>
    </Carousel>
  );
}

export default Banner;
