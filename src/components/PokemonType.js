import React from 'react';
import PropTypes from 'prop-types';
import PokemonListItem from './PokemonListItem';
import { capitalize } from '../utils/helpers';

const PokemonType = ({ type }) => {
  let listOfclass = 'br3 dib f6 pv2 ph3 ml2';

  switch (type) {
    case 'bug':
      listOfclass += ' bg-green white';
      break;
    case 'dragon':
      listOfclass += ' bg-dark-red white';
      break;
    case 'fairy':
      listOfclass += ' bg-pink';
      break;
    case 'fire':
      listOfclass += ' bg-red white';
      break;
    case 'ghost':
      listOfclass += ' bg-purple white';
      break;
    case 'ground':
      listOfclass += ' bg-gold';
      break;
    case 'normal':
      listOfclass += ' bg-light-gray';
      break;
    case 'psyhic':
      listOfclass += ' bg-dark-pink white';
      break;
    case 'steel':
      listOfclass += ' bg-light-gray';
      break;
    case 'dark':
      listOfclass += ' bg-black white';
      break;
    case 'eletric':
      listOfclass += ' bg-yellow';
      break;
    case 'fighting':
      listOfclass += ' bg-orange';
      break;
    case 'flying':
      listOfclass += ' bg-light-blue';
      break;
    case 'grass':
      listOfclass += ' bg-light-green';
      break;
    case 'ice':
      listOfclass += ' bg-blue';
      break;
    case 'poison':
      listOfclass += ' bg-light-red';
      break;
    case 'rock':
      listOfclass += ' bg-light-yellow ';
      break;
    case 'water':
      listOfclass += ' bg-lightest-blue';
      break;
    default:
      listOfclass += ' bg-light-gray';
      break;
  }

  return <span className={listOfclass}>{capitalize(type)}</span>;
};

PokemonType.propTypes = {
  type: PropTypes.string.isRequired
};

export default PokemonType;
