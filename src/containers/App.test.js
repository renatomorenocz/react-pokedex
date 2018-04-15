import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { MemoryRouter as Router } from 'react-router';

it('renders without crashing', () => {
  shallow(
    <Router>
      <App />
    </Router>
  );
});
