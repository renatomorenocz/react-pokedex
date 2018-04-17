import React from 'react';
import { shallow, mount, render } from 'enzyme';
import { expect } from 'chai';
import PokemonImage from './PokemonImage';
import LazyLoad from 'react-image-lazy-load';

describe('<PokemonImage />', () => {
  it('renders without crashing', () => {
    const pokemon = {
      url: 'https://pokeapi.co/api/v2/pokemon-form/6/',
      name: 'charizard'
    };

    shallow(<PokemonImage pokemon={pokemon} />);
  });

  it('should have image with src containing https://assets.pokemon.com', () => {
    const pokemon = {
      url: 'https://pokeapi.co/api/v2/pokemon-form/6/',
      name: 'charizard'
    };

    const wrapper = shallow(<PokemonImage pokemon={pokemon} />);
    expect(wrapper.find(LazyLoad).get(0).props.originalSrc).to.equals(
      'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png'
    );
  });

  it('should have image with src containing https://raw.githubusercontent.com', () => {
    const pokemon = {
      url: 'https://pokeapi.co/api/v2/pokemon-form/1002/',
      name: 'charizard'
    };

    const wrapper = shallow(<PokemonImage pokemon={pokemon} />);
    expect(wrapper.find(LazyLoad).get(0).props.originalSrc).to.equals(
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png'
    );
  });
});
