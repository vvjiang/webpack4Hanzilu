import createLogger from 'redux-logger';
import dva from 'dva'
import './app.less';

import routerConfig from './route/index'
import fundModel from 'models/fundModel'
import { createHashHistory } from 'history';

const app = dva({
  history: createHashHistory(),
  onAction: createLogger,
  onError: (e) => {
    console.error(`异常：${e.message}`);
  },
});

app.model(fundModel)

app.router(routerConfig)

app.start('#app')
