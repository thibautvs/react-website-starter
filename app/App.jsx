import './App.scss';
import React               from 'react';
import ReactDOM            from 'react-dom';
import ReactDOMServer      from 'react-dom/server';
import Router              from 'react-router/lib/Router';
import RoutingContext      from 'react-router/lib/RoutingContext';
import match               from 'react-router/lib/match';
import browserHistory      from 'react-router/lib/browserHistory';
import createMemoryHistory from 'react-router/lib/createMemoryHistory';
import routes              from './Routes';
import favIcon             from './favicon.ico';
import indexTemplate       from './index.html.ejs';

// Development render
if (process.env.NODE_ENV === 'development') {
  ReactDOM.render(
    <Router history={browserHistory} routes={routes} />,
    document.querySelector('#root')
  );
}

// Production (static) render
export default (locals, callback) => {
  const history = createMemoryHistory();
  const location = history.createLocation(locals.path);

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    callback(null, indexTemplate({
      html: ReactDOMServer.renderToString(<RoutingContext {...renderProps} />),
      bundleFileName: locals.appName + '-' + locals.webpackStats.hash,
      isProd: true
    }));
  });
};
