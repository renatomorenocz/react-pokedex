import React from 'react';
import { shallow, mount } from 'enzyme';
import PokemonListItem from './PokemonListItem';
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
});
