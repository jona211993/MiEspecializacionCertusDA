import { useRef, useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import CardImg from "../components/CardImg/CardImg";
import MyFooter from "../components/Footer/Footer";
import { Pagination } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";
import lottie from "lottie-web";
import noteData from "../assets/lotties/dbanimacion.json";
import "./styles/pageMod1.css";

function PageModulo1() {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const renderPageContent = () => {
    switch (currentPage) {
      case 1:
        return <Page1Content />;
      case 2:
        return <Page2Content />;
      // Agrega más casos según sea necesario

      default:
        return null;
    }
  };

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
  useEffect(() => {
    Aos.init();
  }, []);

  const Page1Content = () => {
    return (
      <div className="cont-wraper">
        <div
          data-aos="flip-up"
          data-aos-duration="2000"
          className="cont-titulo"
        >
          <h1>Base de Datos con MS SQL Server 2019</h1>
        </div>
        <h2>Tema 1: SQL: Modelamiento de base de datos</h2>
        <div className="cont-intro-tema">
          <div className=" cont-texto">
            <p>
              Al finalizar esta sesión, conocí la importancia de una base de
              datos en una organización y la arquitectura de la misma. Comprendí
              la importancia de diagramar el modelo lógico y físico dentro de la
              organización, así como definir las diferencias de cada modelo .
              Para hacer los diagramas usamos la herramienta Erwin.
            </p>
          </div>

          <div ref={container} className="cont-img-animada"></div>
        </div>
        <h3>Ejercicios Prácticos de Clase - Modelo Lógico</h3>
        <p>Modelar los siguientes casos:</p>
        <div
          className="cont-cardImg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
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
        <div
          className="cont-cardImg"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          <CardImg
            title="Factura"
            ancho={300}
            url_img={"https://i.postimg.cc/mDxv6y6X/factura.png"}
          ></CardImg>
          <CardImg
            title="Modelo Lógico"
            ancho={300}
            url_img={"https://i.postimg.cc/d1mfY2rZ/modelologico-fc.jpg"}
          ></CardImg>
          <CardImg
            title="Modelo Físico"
            ancho={300}
            url_img={"https://i.postimg.cc/TPcj2CNx/modelofisico-fc.jpg"}
          ></CardImg>
        </div>

        <h4>Ticket de Compra</h4>
        <div
          className="cont-cardImg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <CardImg
            title="Ticket"
            ancho={300}
            url_img={"https://i.postimg.cc/FHjX5M6Z/img-ticket.jpg"}
          ></CardImg>
          <CardImg
            title="Modelo Lógico"
            ancho={300}
            url_img={"https://i.postimg.cc/dtY9Ng8v/modlog2.jpg"}
          ></CardImg>
          <CardImg
            title="Modelo Físico"
            ancho={300}
            url_img={"https://i.postimg.cc/QCsWSGvy/modfis2.jpg"}
          ></CardImg>
        </div>
      </div>
    );
  };

  const Page2Content = () => {
    return (
      <div className="cont-wraper">
        <div
          data-aos="flip-up"
          data-aos-duration="2000"
          className="cont-titulo"
        >
          <h1>Base de Datos con MS SQL Server 2019</h1>
        </div>
        <h2>Tema 2: SQL Server Básico</h2>
        <div className="cont-intro-tema">
          <div className=" cont-texto">
            <p>
              Al finalizar este tema se espera comprender las sentencias para la
              creación de una base de datos e inserción se datos en la misma.
              Asi como otras operaciones en el motor de base de datos.
            </p>
          </div>

          <div className="cont-img-sqlserver"></div>
        </div>
        <h3>Ejercicios Prácticos de Clase - Modelo Lógico</h3>
        <p>Modelar el Caso de Memory kings</p>
        <div
          className="cont-cardImg"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <CardImg
            title="Las Tablas creadas en SQLServerManagementStudio"
            ancho={300}
            url_img={"https://i.postimg.cc/sXn3K3YK/tablas-memory-K.jpg"}
          ></CardImg>
          <CardImg
            title="Diagrama en SQLServerManagementStudio"
            ancho={300}
            url_img={"https://i.postimg.cc/QCFVTfB6/Diagrama-memory-K.jpg"}
          ></CardImg>
        </div>
      </div>
    );
  };

  return (
    <>
      <NavBar></NavBar>
      {renderPageContent()}
      <div className="content-paginacion">
        <Pagination
          current={currentPage}
          total={2} // Número total de páginas
          pageSize={1} // Cantidad de páginas a mostrar en cada página
          onChange={handlePageChange}
        />
      </div>
      <MyFooter></MyFooter>
    </>
  );
}

export default PageModulo1;
