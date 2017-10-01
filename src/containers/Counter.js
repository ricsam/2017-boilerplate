import React from 'react';
import type { Element } from 'react';
import { observable } from 'mobx';
// import autobind from 'autobind-decorator';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';
import Temperature from './Temperature.js';

const cityTempMap = new Map();
cityTempMap.set('Amsterdam', new Temperature());
cityTempMap.set('Rome', new Temperature());
window.temps = observable(cityTempMap);

const Temp = observer(({ temperatures }) => (
  <div>
    {temperatures.entries().map(([city, t]) => (
      <div key={t.id}>
        {city}: {t.temperature}
      </div>
    ))}
  </div>
));

@observer
export default class Counter extends React.PureComponent {
  static propTypes = {
    store: PropTypes.object.isRequired,
  };
  handleDec = () => {
    this.props.store.decrement();
  };
  handleInc = () => {
    this.props.store.increment();
  };
  render(): Element<'div'> {
    return (
      <div>
        Counter: {this.props.store.count}
        <br />
        <button onClick={this.handleDec}>-</button>
        <button onClick={this.handleInc}>+</button>
        <br />
        <Temp temperatures={window.temps} />
      </div>
    );
  }
}
