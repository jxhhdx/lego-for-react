import React from 'react';
import { useRoutes, HashRouter as Router } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.less';
import type { RouterAPI } from 'dva';
import type { IRouterConfig } from '@/typings/router';
import Home from './views/Home';
import Index from './views/Index';
import TemplateDetail from './views/TemplateDetail';
import Editor from './views/Editor';


function App(){
  const routersConfig: IRouterConfig[] = [
    {
      path: '/',
      element: <Index />,
      children: [
        { path: '', element: <Home /> },
        { path: '/template/:id', element: <TemplateDetail /> }
      ]
    },
    {
      path: '/editor',
      element: <Editor />
    }
  ]
  let element = useRoutes(routersConfig);

  return element;
}
export default function RouterConfig(api?: RouterAPI) {
  return (
    <Router>
      <ConfigProvider locale={zhCN}>
        <div className="app-container">
          <App />
        </div>
      </ConfigProvider>
    </Router>
  );
}

