<<<<<<< HEAD
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageMain from './components/pageMain';
import PageSearch from './components/pageSearch';
import PageReader from './components/pageReader';
import reducer from './reducers';
import './app.less';


const store = createStore(reducer);
=======
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
>>>>>>> ad2f687035c29f31e26318f634701c8c6a1d75b6

const App = () => (
  <Provider store={store}>
    <Router>
<<<<<<< HEAD
      <div>
        <Route exact path="/" component={PageMain} />
        <Route path="/search" component={PageSearch} />
        <Route path="/reader" component={PageReader} />
      </div>
    </Router>
  </Provider>
=======
      <Suspense fallback={<Loading />}>
        <Frame>
          <Switch>
            <Route path='/' component={PageMain} />
          </Switch>
        </Frame>
      </Suspense>
    </Router>
  </Provider >
>>>>>>> ad2f687035c29f31e26318f634701c8c6a1d75b6
);

ReactDOM.render(<App />, document.getElementById('app'));
