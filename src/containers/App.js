import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import routes from '../routes';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <Link to="/">List</Link>
          <Link to="/pokemon/test">View</Link>
        </header>

        <main>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.component}
            />
          ))}
        </main>
      </div>
    );
  }
}

export default App;
