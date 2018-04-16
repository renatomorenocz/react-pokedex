import React from 'react';
import PropTypes from 'prop-types';
import PokemonImage from '../components/PokemonImage';
import PokemonType from '../components/PokemonType';
import PokemonStats from '../components/PokemonStats';
import { capitalize } from '../utils/helpers';
import { Helmet } from 'react-helmet';

const PokemonView = ({ pokemon }) => (
  <article>
    <Helmet>
      <title> {capitalize(pokemon.name)} | Pokemon View Page</title>
    </Helmet>
    {pokemon.hasOwnProperty('name') && (
      <section id="info" className="flex center">
        <div className="w-50 bg-near-white br3 tc">
          <PokemonImage pokemon={pokemon.forms[0]} width={300} height={300} />
        </div>
        <div className="w-70 pl4">
          <h1 className="mt0">
            {capitalize(pokemon.name)}{' '}
            <span className="gray">Nº {pokemon.id}</span>
          </h1>

          <ul className="list ma 0 pa0 bg-near-white  br3 pa3">
            <li className="mb3">
              <span className="b">Weight:</span> {pokemon.weight / 10} Kg{' '}
            </li>
            <li className="mb3">
              <span className="b">Height:</span> {pokemon.height / 10} m
            </li>
            <li>
              <span className="b">Abilites</span>
              {pokemon.abilities.map((ability, index) => (
                <span className="db" key={index}>
                  - {ability.ability.name}
                </span>
              ))}
            </li>
          </ul>

          <div>
            <span className="b">Type:</span>{' '}
            {pokemon.types.map((type, index) => (
              <PokemonType key={index} type={type.type.name} />
            ))}
          </div>
        </div>
      </section>
    )}

    {pokemon.hasOwnProperty('stats') && (
      <section id="stats" className="flex center mt4">
        <div className="bg-moon-gray br3 w-100 pa3">
          <h3>Stats</h3>
          <PokemonStats stats={pokemon.stats} />
        </div>
      </section>
    )}
  </article>
);

PokemonView.propTypes = {
  pokemon: PropTypes.object.isRequired
};

export default PokemonView;
