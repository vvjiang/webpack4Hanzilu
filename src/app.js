import createLogger from 'redux-logger';
import dva from 'dva'
import './app.less';

import routerConfig from './route/index'
import pageMainModel from 'modules/pageMain/model'
import { createHashHistory } from 'history';

const app = dva({
  history: createHashHistory(),
  onAction: createLogger
});

app.model(pageMainModel)

app.router(routerConfig)

app.start('#app')
