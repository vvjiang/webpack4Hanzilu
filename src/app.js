import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import PageMain from './components/pageMain';
import PageSearch from './components/pageSearch';
import PageReader from './components/pageReader';
import reducer from './reducers';
import './app.less';


const store = createStore(reducer);

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        <Route exact path="/" component={PageMain} />
        <Route path="/search" component={PageSearch} />
        <Route path="/reader" component={PageReader} />
      </div>
    </Router>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
