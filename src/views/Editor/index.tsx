import React from 'react';
import { Layout } from 'antd';
import './index.less';
const { Content, Sider } = Layout;

const Editor: React.FC = () => {
  return (
    <div className="editor-container">
      <Layout>
        <Sider width="300" style={{ background: 'yellow' }}>
          <div className="sidebar-container">
            组件列表
          </div>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content className="preview-container">
            <p>画布区域</p>
            <div className="preview-list" id="canvas-area">

            </div>
          </Content>
        </Layout>
        <Sider width="300" style={{ background: 'purple' }} className="settings-panel">
          组件属性
        </Sider>
      </Layout>
    </div>
  );
};

export default Editor;