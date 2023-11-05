import Banner from "../components/Banner/Banner"
import NavBar from "../components/NavBar/NavBar"
import Section from "../components/Section/Section"
import Footer from '../components/Footer/Footer'
import {useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
     <NavBar></NavBar>
     <div data-aos="zoom-in-up" data-aos-duration="1500" >
      <Banner></Banner>
      </div>
     <Section></Section>
     <Footer></Footer>
    </>
  )
}

export default Home