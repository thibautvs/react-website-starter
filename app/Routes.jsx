import Route      from 'react-router/lib/Route'
import IndexRoute from 'react-router/lib/IndexRoute'
import Template   from './Template'
import Home       from './pages/Home'
import About      from './pages/About'
import NotFound   from './pages/NotFound'

export default (
  <Route path="/" component={Template}>
    <IndexRoute component={Home} />
    <Route path="about" component={About} />
    <Route path="*" component={NotFound} />
  </Route>
)
