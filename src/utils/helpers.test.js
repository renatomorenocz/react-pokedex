import { expect } from 'chai';
import {
  capitalize,
  formatIdPokemon,
  getIdPokemonByUrl,
  getStatDisplayRatio
} from './helpers';

describe('helpers.js', () => {
  it('test capitalize', () => {
    expect(capitalize('pokemon')).to.equal('Pokemon');
  });

  it('test formatIdPokemon', () => {
    expect(formatIdPokemon('1')).to.equal('001');
    expect(formatIdPokemon('10')).to.equal('010');
    expect(formatIdPokemon('111')).to.equal('111');
  });

  it('test getIdPokemonByUrl', () => {
    expect(
      getIdPokemonByUrl('https://pokeapi.co/api/v2/pokemon-form/6/')
    ).to.equal('006');
  });

  it('test getStatDisplayRatio', () => {
    expect(getStatDisplayRatio(255)).to.equal(10);
    expect(getStatDisplayRatio(0)).to.equal(0);
    expect(getStatDisplayRatio(127)).to.equal(7);
  });
});
