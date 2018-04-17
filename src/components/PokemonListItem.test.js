import React from 'react';
import { expect } from 'chai';
import { shallow, mount } from 'enzyme';
import PokemonListItem from './PokemonListItem';
import PokemonImage from './PokemonImage';
import { MemoryRouter as Router } from 'react-router';

const pokemon = {
  url: 'https://pokeapi.co/api/v2/pokemon/1/',
  name: 'bulbasaur'
};

describe('<PokemonListItem />', () => {
  it('renders without crashing', () => {
    shallow(<PokemonListItem pokemon={pokemon} />);
  });

  it('renders without crashing with Link', () => {
    mount(
      <Router>
        <PokemonListItem pokemon={pokemon} />
      </Router>
    );
  });

  it('renders with PokemonImage', () => {
    const wrapper = shallow(<PokemonListItem pokemon={pokemon} />);
    expect(wrapper.find(PokemonImage)).to.have.length(1);
  });

  it('renders with span name', () => {
    const wrapper = shallow(<PokemonListItem pokemon={pokemon} />);
    expect(wrapper.find('span.db').text()).to.equal('Bulbasaur');
  });
});
