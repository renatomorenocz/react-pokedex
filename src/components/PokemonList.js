import React from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem';

const PokemonList = ({ data }) => (
  <section id="pokemon-list" className="bg--light-yellow ph4-l ph2 ph-3-m">
    <ul className="list flex flex-wrap justify-center ma0 pa0">
      {data.map((pokemon, index) => (
        <li key={index} className="w-90 w-25-m w-20-l pa3">
          <PokemonListItem pokemon={pokemon} />
        </li>
      ))}
    </ul>
  </section>
);

PokemonList.propTypes = {
  data: PropTypes.array.isRequired
};

export default PokemonList;
