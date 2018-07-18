import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import Loadable from 'react-loadable';
import reducer from './reducers';
import './app.less';

function Loading() {
  return <div>Loading...</div>;
}

const PageMain = Loadable({
  loader: () => import('./components/pageMain'),
  loading: Loading,
});

const PageSearch = Loadable({
  loader: () => import('./components/pageSearch'),
  loading: Loading,
});

const PageReader = Loadable({
  loader: () => import('./components/pageReader'),
  loading: Loading,
});


const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={PageMain} />
        <Route path="/search" component={PageSearch} />
        <Route path="/reader/:bookid/:link" component={PageReader} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
