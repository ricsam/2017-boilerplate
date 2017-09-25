// @flow
import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from './containers/App.js';

const MOUNT_NODE = document.getElementById('app');

// eslint-disable-next-line
const errorReporter = <i>123</i>;
const render = (El: typeof App) => {
  ReactDOM.render(
    <AppContainer errorReporter={errorReporter}>
      <El />
    </AppContainer>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./containers/App.js', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./containers/App.js').default;
    render(NextApp);
  });
}
render(App);
