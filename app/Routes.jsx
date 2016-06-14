import { Route, IndexRoute } from 'react-router';
import Template from './Template';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';

export default (
  <Route path="/" component={Template}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
);
