import React from 'react';
import { Layout } from 'antd';
import './index.less';
const { Header, Content, Footer } = Layout;

const Index: React.FC = () => {
  return (
    <div className="homepage-container">
      <Layout style={{ background: '#fff' }}>
        <Header className="header">
          <div className="page-title">
            {/* <router-link to="/">慕课乐高</router-link> */}
          </div>
          {/* <user-profile :user="user"></user-profile> */}
        </Header>
        <Content className="home-layout">
          {/* <router-view></router-view> */}
        </Content>
      </Layout>
      <Footer>
        © xx网（xxxxx.com）版权所有 | xICP备xxxxxx号-x
      </Footer>
    </div>
  );
};

export default Index;