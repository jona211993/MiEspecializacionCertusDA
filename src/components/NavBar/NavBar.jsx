import {useEffect} from 'react';
import { Layout, Menu } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

const { Header } = Layout;

function NavBar() {
  const items = [
    // {
    //   label: 'Inicio',
    //   key: 'home',
    // }
    // {
    //   label: 'Temas',
    //   key: 'mail',
    // },
  ];

  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div data-aos="fade-down"
    data-aos-easing="linear"
    data-aos-duration="1000">
      <Layout className="layout">
        <Header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div className="demo-logo">
            <h3 style={{ color: "#fff", margin: "0px", width: "300px" }}>
              Especialización en Data Analytics
            </h3>
          </div>
          <Menu
            theme="dark"
            mode="horizontal"
            style={{ display: "flex", justifyContent: "flex-end" }}
            items={items}
          ></Menu>
        </Header>
        {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
      </Layout>
    </div>
  );
}

export default NavBar;
