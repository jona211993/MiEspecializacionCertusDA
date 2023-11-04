import { useRef, useEffect } from "react";
import lottie from "lottie-web";
import { Image } from "antd";
import NavBar from "../components/NavBar/NavBar";
import CardImg from "../components/CardImg/CardImg";
import noteData from "../assets/lotties/dbanimacion.json";
import "./styles/pageMod1.css";
import MyFooter from "../components/Footer/Footer";

function PageModulo1() {
  const container = useRef(null);
  useEffect(() => {
    lottie.loadAnimation({
      container: container.current, // the dom element that will contain the animation
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: noteData, // the path to the animation json
    });
  }, []);

  return (
    <>
      <NavBar></NavBar>
      <div className="cont-wraper">
        <div className="cont-titulo">
          <h1>Base de Datos con MS SQL Server 2019</h1>
        </div>
        <h2>Tema 1: SQL: Modelamiento de base de datos</h2>
        <div className="cont-intro-tema">
          <div className=" cont-texto"
          >
          <p>
            Al finalizar esta sesión, conocí la importancia de una base de datos
            en una organización y la arquitectura de la misma. Comprendí la
            importancia de diagramar el modelo lógico y físico dentro de la
            organización, así como definir las diferencias de cada modelo . Para
            hacer los diagramas usamos la herramienta Erwin.
          </p>
          </div>

          <div ref={container} className="cont-img-animada"></div>
        </div>
        <h3>Ejercicios Prácticos de Clase - Modelo Lógico</h3>
        <p>Modelar los siguientes casos:</p>
        <div className="cont-cardImg">
          <CardImg
            title="Caso 1: Caso de Reserva de Vehículos"
            ancho={300}
            url_img={"https://i.postimg.cc/5y3Gxwsd/diagrama1.jpg"}
          ></CardImg>
          <CardImg
            title="Caso 2: Venta de Productos"
            ancho={300}
            url_img={"https://i.postimg.cc/65Q1qF22/diagrama2.jpg"}
          ></CardImg>
          <CardImg
            title="Caso 3: Empresa Memory Kings"
            ancho={300}
            url_img={"https://i.postimg.cc/6pqrYWys/diagrama3.jpg"}
          ></CardImg>
        </div>
        <br />
        <h3>Ejercicios de Clase - Normalización y Modelo Físico </h3>
        <h4>Factura de Compra</h4>
        <h5>Modelo Lógico</h5>
        <div className="contenedor-img">
          <Image
            width={300}
            src="https://i.postimg.cc/d1mfY2rZ/modelologico-fc.jpg"
          />
        </div>
        <br />
        <h5>Modelo Físico</h5>
        <div className="contenedor-img">
          <Image
            width={300}
            src="https://i.postimg.cc/TPcj2CNx/modelofisico-fc.jpg"
          />
        </div>
        <h4>Ticket de Compra</h4>
        <div className="cont-foto">
          <img
            className="foto-ticket"
            src="https://i.postimg.cc/FHjX5M6Z/img-ticket.jpg"
          ></img>
        </div>
        <h5>Modelo Lógico</h5>
        <div className="contenedor-img">
          <Image width={300} src="https://i.postimg.cc/dtY9Ng8v/modlog2.jpg" />
        </div>
        <br />
        <h5>Modelo Físico</h5>
        <div className="contenedor-img">
          <Image width={300} src="https://i.postimg.cc/QCsWSGvy/modfis2.jpg" />
        </div>
      </div>
      <MyFooter></MyFooter>
    </>
  );
}

export default PageModulo1;
