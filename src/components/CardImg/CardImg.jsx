import React from 'react'
import { Image } from "antd";
import "../../pages/styles/pageMod1.css";

function CardImg({title,ancho,url_img}) {
  return (
    <div>
        <h4>{title}</h4>
        <div className="contenedor-img">
            <Image
            width={ancho}
            height={200}
            src={url_img}
            />            
        </div>
    </div>
  )
}

export default CardImg