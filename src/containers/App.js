import { observable } from 'mobx';
import React from 'react';
// eslint-disable-next-line
import Devtools from 'mobx-react-devtools';
import Counter from './Counter.js';

const appState = observable({
  count: 0,
});
appState.increment = function() {
  this.count++;
};
appState.decrement = function() {
  this.count--;
};

// eslint-disable-next-line
export default class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Devtools />
        <Counter store={appState} />
      </div>
    );
  }
}
