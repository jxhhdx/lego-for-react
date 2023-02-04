import dva from 'dva';
import type { Model } from 'dva';
import './index.less';
import router from './router';
import models from './models';

// 1. Initialize
const app = dva();

// 2. Plugins
// app.use({});

// 3. Model
models.forEach((item) => {
  app.model(item as Model);
})
// app.model(require('./models/example').default);

// 4. Router
app.router(router);

// 5. Start
app.start('#root');