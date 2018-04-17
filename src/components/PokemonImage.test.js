import React from 'react';
import { shallow, mount } from 'enzyme';
import { expect } from 'chai';
import PokemonImage from './PokemonImage';

describe('<PokemonImage />', () => {
  it('renders without crashing', () => {
    const pokemon = {
      url: 'https://pokeapi.co/api/v2/pokemon-form/6/',
      name: 'charizard'
    };

    shallow(<PokemonImage pokemon={pokemon} />);
  });
});
