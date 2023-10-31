import React from 'react';
import { Layout, Menu } from 'antd';

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

  return (
    <Layout className="layout">
      <Header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div className="demo-logo">
          <h3 style={{ color: '#fff', margin: '0px', width: '300px'}}>Especialización en Data Analytics</h3>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          style={{ display: 'flex', justifyContent: 'flex-end' }}
          items = {items}
        >
          
        </Menu>
      </Header>
      {/* <Footer
        style={{
          textAlign: 'center',
        }}
      >
        Ant Design ©2023 Created by Ant UED
      </Footer> */}
    </Layout>
  );
}

export default NavBar;
