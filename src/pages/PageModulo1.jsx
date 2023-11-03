import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { Image } from "antd";
import "./styles/pageMod1.css";
function PageModulo1() {
  return (
    <>
      <NavBar></NavBar>
      <div className="cont-wraper">
        <div className="cont-titulo">
          <h1>Base de Datos con MS SQL Server 2019</h1>
        </div>
        <h2>Tema 1: SQL: Modelamiento de base de datos</h2>
        <p>
          Al finalizar esta sesión, conocí la importancia de una base de datos
          en una organización y la arquitectura de la misma. Comprendí la
          importancia de diagramar el modelo lógico y físico dentro de la
          organización, así como definir las diferencias de cada modelo . Para
          hacer los diagramas usamos la herramienta Erwin.
        </p>
        <h3>Ejercicios Prácticos de Clase - Modelo Lógico</h3>
        <p>Modelar los siguientes casos:</p>
        <h4>Caso 1: Caso de Reserva de Vehículos</h4>
        <div className="contenedor-img">
            <Image
            width={500}
            src="https://i.postimg.cc/5y3Gxwsd/diagrama1.jpg"
            />            
        </div>
        <h4>Caso 2: Venta de Productos</h4>
        <div className="contenedor-img">
            <Image
            width={500}
            src="https://i.postimg.cc/65Q1qF22/diagrama2.jpg"
            />            
        </div>
        <h4>Caso 3: Empresa Memory Kings</h4>
        <div className="contenedor-img">
            <Image
            width={600}
            src="https://i.postimg.cc/6pqrYWys/diagrama3.jpg"
            />            
        </div>
        <br />
        <h3>Ejercicios de Clase - Normalización y Modelo Físico </h3>
        <h4>Factura de Compra</h4>
        <h5>Modelo Lógico</h5>
        <div className="contenedor-img">
            <Image
            width={600}
            src="https://i.postimg.cc/d1mfY2rZ/modelologico-fc.jpg"
            />            
        </div>
        <br />
        <h5>Modelo Físico</h5>
        <div className="contenedor-img">
            <Image
            width={600}
            src="https://i.postimg.cc/TPcj2CNx/modelofisico-fc.jpg"
            />            
        </div>
        <h4>Ticket de Compra</h4>
        <h5>Modelo Lógico</h5>
        <div className="contenedor-img">
            <Image
            width={600}
            src="https://i.postimg.cc/dtY9Ng8v/modlog2.jpg"
            />            
        </div>
        <br />
        <h5>Modelo Físico</h5>
        <div className="contenedor-img">
            <img className="foto-ticket" src="https://i.postimg.cc/FHjX5M6Z/img-ticket.jpg" >
            </img>
            <br />
            <Image
            width={600}
            src="https://i.postimg.cc/QCsWSGvy/modfis2.jpg"
            />            
        </div>
      </div>
    </>
  );
}

export default PageModulo1;
