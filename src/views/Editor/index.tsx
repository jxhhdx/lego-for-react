import React from 'react';
import { Layout } from 'antd';
import './index.less';
import LText from '@/components/LText';
import ComponentsList from '@/components/ComponentsList';
import EditWrapper from '@/components/EditWrapper';
import PropsTable from '@/components/PropsTable';
import { defaultTextTemplates } from '@/defaultTemplates';

const { Content, Sider } = Layout;

const Editor: React.FC = () => {
  const addItem = (props: any) => {
    // store.commit('addComponent', props)
  }
  return (
    <div className="editor-container">
      <Layout>
        <Sider width="300" style={{ background: 'yellow' }}>
          <div className="sidebar-container">
            组件列表
            <ComponentsList list={defaultTextTemplates} onItemClick={addItem} />
          </div>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content className="preview-container">
            <p>画布区域</p>
            <div className="preview-list" id="canvas-area">
              {/* <EditWrapper ></EditWrapper> */}
            </div>
          </Content>
        </Layout>
        <Sider width="300" style={{ background: 'purple' }} className="settings-panel">
          组件属性
          <PropsTable></PropsTable>
        </Sider>
      </Layout>
    </div>
  );
};

export default Editor;