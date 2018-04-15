import React from 'react';
import { shallow } from 'enzyme';
import PokemonView from './PokemonView';

const dataPokemon = {
  forms: [
    {
      url: 'https://pokeapi.co/api/v2/pokemon-form/6/',
      name: 'charizard'
    }
  ],
  abilities: [
    {
      slot: 3,
      is_hidden: true,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/94/',
        name: 'solar-power'
      }
    },
    {
      slot: 1,
      is_hidden: false,
      ability: {
        url: 'https://pokeapi.co/api/v2/ability/66/',
        name: 'blaze'
      }
    }
  ],
  stats: [
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/6/',
        name: 'speed'
      },
      effort: 0,
      base_stat: 100
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/5/',
        name: 'special-defense'
      },
      effort: 0,
      base_stat: 85
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/4/',
        name: 'special-attack'
      },
      effort: 3,
      base_stat: 109
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/3/',
        name: 'defense'
      },
      effort: 0,
      base_stat: 78
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/2/',
        name: 'attack'
      },
      effort: 0,
      base_stat: 84
    },
    {
      stat: {
        url: 'https://pokeapi.co/api/v2/stat/1/',
        name: 'hp'
      },
      effort: 0,
      base_stat: 78
    }
  ],
  name: 'charizard',
  weight: 905,
  held_items: [],
  location_area_encounters: '/api/v2/pokemon/6/encounters',
  height: 17,
  is_default: true,
  species: {
    url: 'https://pokeapi.co/api/v2/pokemon-species/6/',
    name: 'charizard'
  },
  id: 6,
  order: 7,
  base_experience: 240,
  types: [
    {
      slot: 2,
      type: {
        url: 'https://pokeapi.co/api/v2/type/3/',
        name: 'flying'
      }
    },
    {
      slot: 1,
      type: {
        url: 'https://pokeapi.co/api/v2/type/10/',
        name: 'fire'
      }
    }
  ]
};
describe('<PokemonView />', () => {
  it('renders without crashing', () => {
    shallow(<PokemonView pokemon={dataPokemon} />);
  });
});
