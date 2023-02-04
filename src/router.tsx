import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.less';
import type { RouterAPI } from 'dva';
import Home from './views/Home';
import Index from './views/Index';
import TemplateDetail from './views/TemplateDetail';
import Editor from './views/Editor';

export default function RouterConfig(api?: RouterAPI) {
  return (
    <ConfigProvider
      locale={zhCN}
      theme={{
        token: { colorPrimary: '#00b96b' },
      }}
    >
      <Router history={api?.history}>
        <Switch>
          <Route path="/" exact component={Index} >
            <Route path="/home" component={Home}></Route>
            <Route path="/template" component={TemplateDetail}></Route>
          </Route>
          <Route path="/editor" component={Editor} ></Route>
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

