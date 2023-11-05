import React from 'react'
import { Layout} from 'antd';

const { Footer } = Layout;
function MyFooter() {
  return (
    <Footer
        style={{
          textAlign: 'center',
          background: '#0A3143',
          color: 'white',
          fontWeight: '700'
        }}
      >
        ©2023 Created by  JP
      </Footer> 
  )
}

export default MyFooter