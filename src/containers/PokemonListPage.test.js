import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import PokemonList from '../components/PokemonList';

describe('Pokemon List Page', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Router initialEntries={['/']}>
        <App />
      </Router>
    );

    expect(wrapper.text()).to.contain('React Pokedex');
    expect(wrapper.find(PokemonList)).length(1);
  });
});
