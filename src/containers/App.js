// @flow
import React from 'react';
import type { Element } from 'react';
import autobind from 'autobind-decorator';

export type Props = {};

export default class App extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.data = 'some text';
  }
  data: string = '';

  @autobind
  met(): string {
    console.log(this.data);
    return this.data;
  }
  render(): Element<'button'> {
    return <button onClick={this.met}>Clwefick me!</button>;
  }
}
