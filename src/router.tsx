import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/locale/zh_CN';
import 'antd/dist/reset.css';
import './index.less';
import HelloWorld from './components/HelloWorld/index';
import type { RouterAPI } from 'dva';

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
          <Route path="/" exact component={HelloWorld} >
          </Route>
        </Switch>
      </Router>
    </ConfigProvider>
  );
}

