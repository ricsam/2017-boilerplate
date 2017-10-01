import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import InitialContainer from './InitialContainer.js';

const MOUNT_NODE = document.getElementById('app');

// eslint-disable-next-line
const errorReporter = <i>123</i>;
const render = (El, initialRender) => {
  ReactDOM.render(
    <AppContainer errorReporter={errorReporter}>
      {!initialRender ? <InitialContainer /> : <p>Loading</p>}
    </AppContainer>,
    MOUNT_NODE
  );
};

if (module.hot) {
  // Hot reloadable React components and translation json files
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept('./InitialContainer.js', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./InitialContainer.js').default;
    render(NextApp);
  });
}
render(InitialContainer, false);
