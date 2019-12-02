import React, { Suspense } from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import promiseMiddleware from 'redux-promise';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import reducer from 'store/reducers';
import './app.less';

import Frame from 'modules/layout/Frame'

function Loading() {
  return <div>Loading...</div>;
}
const PageMain = React.lazy(() => import('modules/pageMain'));

const store = createStore(reducer, applyMiddleware(thunk, createLogger, promiseMiddleware));

const App = () => (
  <Provider store={store}>
    <Router>
      <Suspense fallback={<Loading />}>
        <Frame>
          <Switch>
            <Route path='/' component={PageMain} />
          </Switch>
        </Frame>
      </Suspense>
    </Router>
  </Provider >
);

ReactDOM.render(<App />, document.getElementById('app'));
