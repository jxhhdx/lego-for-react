import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import HelloWorld from './components/HelloWorld/index';
import type { RouterAPI } from 'dva';

export default function RouterConfig(api?: RouterAPI) {
  return (
    <Router history={api?.history}>
      <Switch>
        <Route path="/" exact component={HelloWorld} />
      </Switch>
    </Router>
  );
}

