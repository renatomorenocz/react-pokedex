import React from 'react';
import { shallow, mount } from 'enzyme';
import PokemonStats from './PokemonStats';

const data = {
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
  ]
};

describe('<PokemonStats />', () => {
  it('renders without crashing', () => {
    shallow(<PokemonStats stats={data.stats} />);
  });

  it('renders without crashing with PokemonStatsItem', () => {
    mount(<PokemonStats stats={data.stats} />);
  });
});
