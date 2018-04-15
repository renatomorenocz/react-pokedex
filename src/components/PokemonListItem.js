import React from 'react';
import { Link } from 'react-router-dom';
import PokemonImage from '../components/PokemonImage';
import { capitalize } from '../utils/helpers';

export default ({ pokemon }) => (
  <div className="db tc grow br3 pv3 ba b--black-10 shadow-5 bg-animate hover-bg-washed-yellow">
    <Link className="link " to={'/pokemon/' + pokemon.name}>
      <PokemonImage pokemon={pokemon} />
      <span className="db f4 gray">{capitalize(pokemon.name)}</span>
    </Link>
  </div>
);
