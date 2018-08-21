// Express requirements
import path from 'path';
import fs from 'fs';

// React requirements
import React from 'react';
import { renderToString } from 'react-dom/server';
import Helmet from 'react-helmet';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router';
import { Frontload, frontloadServerRender } from 'react-frontload';
import Loadable from 'react-loadable';
import render from './render';

// Our store, entrypoint, and manifest
import createStore from 'store';
import App from 'containers/App';
//import manifest from '../build/asset-manifest.json';

// Some optional Redux functions related to user authentication
//import { setCurrentUser, logoutUser } from '../src/modules/auth';

// LOADER
export default (req, res) => {

  // Create a store (with a memory history) from our current url
  const { store } = createStore(req.url);
  const context = {};
  const modules = [];

  frontloadServerRender(() =>
    renderToString(
      <Loadable.Capture report={m => modules.push(m)}>
        <Provider store={store}>
          <StaticRouter location={req.url} context={context}>
            <Frontload isServer>
              <App />
            </Frontload>
          </StaticRouter>
        </Provider>
      </Loadable.Capture>
    )
  ).then(routeMarkup => {
    if (context.url) {
      // If context has a url property, then we need to handle a redirection in Redux Router
      res.writeHead(302, {
        Location: context.url
      });

      res.end();
    } else {
      const state = store.getState();
      const html = render(routeMarkup, state);
      res.send(html);
    }
  })
  .catch(err => console.log('XXXXXXXXXXXXXXXXXXXxx err 1', err));
};
