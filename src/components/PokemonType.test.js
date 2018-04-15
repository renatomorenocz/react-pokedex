import React from 'react';
import { shallow } from 'enzyme';
import PokemonType from './PokemonType';

describe('<PokemonType />', () => {
  it('renders without crashing', () => {
    shallow(<PokemonType type="bug" />);
  });
});
