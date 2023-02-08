import React from 'react';
import { Layout } from 'antd';
import { connect } from 'dva';
import { Outlet, Link } from 'react-router-dom';
import { BaseProps, mapStateToProps } from '@/views/typing';
import UserProfile from '@/components/UserProfile';
import './index.less';
const { Header, Content, Footer } = Layout;

const Index: React.FC<BaseProps> = (props) => {
  const { user } = props;
  return (
    <div className="homepage-container">
      <Layout style={{ background: '#fff' }}>
        <Header className="header">
          <div className="page-title">
            <Link to="/">乐高积木</Link>
          </div>
          <UserProfile user={user} />
        </Header>
        <Content className="home-layout">
          <Outlet />
        </Content>
      </Layout>
      <Layout>
        <Footer>
          © xx网（xxxxx.com）版权所有 | xICP备xxxxxx号-x
        </Footer>
      </Layout>
    </div>
  );
};

export default connect(mapStateToProps)(Index);