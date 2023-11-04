import React, { useRef, useEffect} from "react";
import { Link } from "react-router-dom";
import lottie from 'lottie-web';
import noteData from '../../assets/lotties/dataanimacion.json';
import "./section.css";

function Section() {
  const container= useRef(null);

  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: noteData// the path to the animation json
    }); 
   
  }, []);
  



  return (
    <>
      <div className="cont-presentacion">
        <h2>Bienvenido (a)</h2>
        <p>
          ¡Saludos a todos los entusiastas del análisis de datos y bienvenidos a
          mi blog! Aquí compartiré mi emocionante viaje de aprendizaje y
          descubrimiento mientras avanzo en mi capacitación en Data Analytics en
          el prestigioso Instituto Certus. A medida que sumerjo mis raíces en el
          vasto campo del análisis de datos, aprovecharé este espacio para
          documentar mis experiencias, éxitos y desafíos a lo largo del camino!
        </p>
      </div>
      <div className="wraper-temas">
        <div className="cont-temas">
          <h2>Módulos</h2>
          <ul>
            <li>
              <span>Módulo 1: </span>
              <Link to="modulo1">
                Base de Datos con MS SQL Server 2019 &#128526;
              </Link>
              <span>Módulo 2: </span>
              <a href="">Conociendo Python para ETL</a>
              <span>Módulo 3: </span>
              <a href="">DataOps</a>
              <span>Módulo 4: </span>
              <a href="">Big Data y Visualisación</a>
            </li>
          </ul>
        </div>
        <div className="cont-imagen">
          <div ref={container}  className="cont-img-animada">         
          </div>
        </div>
      </div>
    </>
  );
}

export default Section;
