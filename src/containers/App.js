import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import routes from '../routes';

class App extends Component {
  render() {
    return (
      <main className="sans-serif mw-100">
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.component}
          />
        ))}
      </main>
    );
  }
}

export default App;
