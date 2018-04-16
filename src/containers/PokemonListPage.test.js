import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import PokemonList from '../components/PokemonList';

describe('Pokemon List Page', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(
      <Router initialEntries={['/']}>
        <App />
      </Router>
    );
  });
});
