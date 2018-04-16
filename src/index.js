import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import configureStore, { history } from './redux/configureStore';
import App from './containers/App';
import './css/index.css';

const target = document.querySelector('#root');
const store = configureStore();
render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App />
    </ConnectedRouter>
  </Provider>,
  target
);

if (module.hot) {
  module.hot.accept('./containers/App', () => {
    const NextApp = require('./containers/App').default;
    render(
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <NextApp />
        </ConnectedRouter>
      </Provider>,
      target
    );
  });
  window.store = store;
}
