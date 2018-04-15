import React from 'react';
import { MemoryRouter as Router } from 'react-router';
import { mount } from 'enzyme';
import { expect } from 'chai';
import App from './App';
import PokemonView from '../components/PokemonView';

describe('Pokemon List Page', () => {
  it('renders without crashing', () => {
    const wrapper = mount(
      <Router initialEntries={['/pokemon/charizard']}>
        <App />
      </Router>
    );

    expect(wrapper.text()).to.contain('Charizard');
    expect(wrapper.find(PokemonView)).length(1);
  });
});
