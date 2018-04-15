import React from 'react';
import PropTypes from 'prop-types';
import { getIdPokemonByUrl } from '../utils/helpers';

const PokemonImage = ({ pokemon, width, height }) => (
  <div>
    <img
      src={
        'https://assets.pokemon.com/assets/cms2/img/pokedex/full/' +
        getIdPokemonByUrl(pokemon.url) +
        '.png'
      }
      width={width}
      height={height}
      alt={pokemon.name}
    />
  </div>
);

PokemonImage.propTypes = {
  pokemon: PropTypes.object.isRequired,
  width: PropTypes.number,
  height: PropTypes.number
};
PokemonImage.defaultProps = {
  width: 96,
  height: 96
};

export default PokemonImage;
