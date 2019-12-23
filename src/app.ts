import createLogger from 'redux-logger';
import dva from 'dva'
import { createHashHistory } from 'history';

import appModels from './app.model.js'
import './app.less';
import routerConfig from './route/index'

const app = dva({
  history: createHashHistory(),
  onAction: createLogger,
  onError: (e) => {
    console.error(`异常：${e.message}`);
  },
});

appModels.forEach((model) => {
  app.model(model)
})

app.router(routerConfig)

app.start('#app')
