import './App.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute, NotFoundRoute } from 'react-router';
import Template from './Template';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={Template}>
      <IndexRoute component={Home} />
      <Route path="about" component={About} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
), document.querySelector('#root'));
