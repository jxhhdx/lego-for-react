import React, { useMemo, createElement, useState, useEffect } from 'react';
import { Layout } from 'antd';
import './index.less';
import { BaseProps, mapStateToProps } from '@/views/typing';
import ComponentsList from '@/components/ComponentsList';
import EditWrapper from '@/components/EditWrapper';
import PropsTable from '@/components/PropsTable';
import createComponent from '@/utils/createComponent';
import { connect } from 'dva';
import { defaultTextTemplates } from '@/defaultTemplates';

const { Content, Sider } = Layout;

const Editor: React.FC<BaseProps> = (props) => {
  const { editor, dispatch } = props;
  const [currentElement, setCurrentElement] = useState<BaseProps['editor']['components'][0]>()
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
    console.log(e)
    dispatch({
      type: "editor/updateComponent",
      payload: e
    })
  } 
  const getCurrentActiveElement = (components: BaseProps['editor']['components']) => {
    return components.find((component) => component.id === editor.currentElement)
  }
  useEffect(() => {
    const element = getCurrentActiveElement(editor.components);
    setCurrentElement(element);
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
                  {createComponent(
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
            {JSON.stringify(currentElement && currentElement.props, null, 2)}
          </pre>
        </Sider>
      </Layout>
    </div>
  );
};

export default connect(mapStateToProps)(Editor);