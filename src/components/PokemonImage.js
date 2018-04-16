import React from 'react';
import PropTypes from 'prop-types';
import { getIdPokemonByUrl } from '../utils/helpers';
import LazyLoad from 'react-image-lazy-load';
import imagePlaceholder from '../images/placeholder.gif';

const PokemonImage = ({ pokemon, width, height }) => {
  let urlImage =
    getIdPokemonByUrl(pokemon.url) < 1001
      ? 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/'
      : 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

  return (
    <div>
      <LazyLoad
        height={height}
        loaderImage={true}
        originalSrc={urlImage + getIdPokemonByUrl(pokemon.url) + '.png'}
        imageProps={{
          src: imagePlaceholder,
          alt: pokemon.name,
          width: width
        }}
      />
    </div>
  );
};

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
