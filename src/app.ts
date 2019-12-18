import createLogger from 'redux-logger';
import dva from 'dva'
import { createHashHistory } from 'history';

import appModels from './app.model.js'
import './app.less';
import routerConfig from './route/index'


const app = dva({
  history: createHashHistory(),
  onAction: createLogger
});

appModels.forEach((model) => {
  app.model(model)
})

app.router(routerConfig)

app.start('#app')
