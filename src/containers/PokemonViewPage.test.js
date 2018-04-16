import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import PokemonView from '../components/PokemonView';

describe('Pokemon List Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Router initialEntries={['/pokemon/charizard']}>
        <App />
      </Router>
    );
  });
});
