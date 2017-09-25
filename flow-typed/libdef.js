/* eslint-disable */

declare var module: {
  hot: {
    accept(path: string, callback: () => void): void,
  },
};

declare var require: any;

declare module 'react-hot-loader' {
  declare class AppContainer<S, A> extends React$Component<{
    errorReporter?: React$Element<any> | (() => React$Element<any>),
    children: React$Element<any>,
  }> {}
}
