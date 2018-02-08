import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PageMain from './components/pageMain';
import PageSearch from './components/pageSearch';
import './app.less';


const App = () => (
  <Router>
    <div>
      <Route exact path="/" component={PageMain} />
      <Route path="/search" component={PageSearch} />
    </div>
  </Router>
);

ReactDOM.render(<App />, document.getElementById('app'));
