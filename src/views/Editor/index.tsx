import React, { useMemo, createElement } from 'react';
import { Layout } from 'antd';
import './index.less';
import { BaseProps, mapStateToProps } from '@/views/typing';
import ComponentsList from '@/components/ComponentsList';
import EditWrapper from '@/components/EditWrapper';
import PropsTable from '@/components/PropsTable';
import { connect } from 'dva';
import { defaultTextTemplates } from '@/defaultTemplates';

const { Content, Sider } = Layout;

const Editor: React.FC<BaseProps> = (props) => {
  const { editor, dispatch } = props;
  const addItem = (props: any) => {
    dispatch({
      type: "editor/addComponent",
      payload: props
    })
  }
  const setActive = (id: string) => {
    dispatch({
      type: "editor/setActive",
      payload: id
    })
  }
  const handleChange = (e: any) => {
    dispatch({
      type: "editor/updateComponent",
      payload: e
    })
  } 
  const currentElement = useMemo(() => {
    return editor.components.find((component) => component.id === editor.currentElement)
  }, [editor])
  return (
    <div className="editor-container">
      <Layout>
        <Sider width="300" style={{ background: '#fff' }}>
          <div className="sidebar-container">
            组件列表
            <ComponentsList list={defaultTextTemplates} onItemClick={addItem} />
          </div>
        </Sider>
        <Layout style={{ padding: '0 24px 24px' }}>
          <Content className="preview-container">
            <p>画布区域</p>
            <div className="preview-list" id="canvas-area">
              {editor.components.map((component, index) => (
                <EditWrapper
                  setActive={setActive}
                  id={component.id}
                  key={index}
                  active={component.id === (currentElement && currentElement.id)}
                >
                  {createElement(
                    component.name,
                    { ...component.props }
                  )}
                </EditWrapper>
              ))}
            </div>
          </Content>
        </Layout>
        <Sider width="300" style={{ background: '#fff' }} className="settings-panel">
          组件属性
          {currentElement && currentElement.props && (
            <PropsTable
              props={currentElement.props}
              onChange={handleChange}
            />
          )}
          <pre>
            {currentElement && currentElement.props}
          </pre>
        </Sider>
      </Layout>
    </div>
  );
};

export default connect(mapStateToProps)(Editor);