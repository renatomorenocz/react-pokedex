import React from 'react';
import { shallow } from 'enzyme';
import PokemonStatsItem from './PokemonStatsItem';

const data = {
  stat: {
    url: 'https://pokeapi.co/api/v2/stat/6/',
    name: 'speed'
  },
  effort: 0,
  base_stat: 100
};

describe('<PokemonStatsItem />', () => {
  it('renders without crashing', () => {
    shallow(<PokemonStatsItem name={data.stat.name} value={data.base_stat} />);
  });
});
