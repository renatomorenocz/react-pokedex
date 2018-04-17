import React from 'react';
import PropTypes from 'prop-types';
import { getStatDisplayRatio } from '../utils/helpers';

const PokemonStatsItem = ({ name, value }) => {
  let columns = [];
  const refValue = Math.abs(getStatDisplayRatio(value) - 10);

  for (var i = 0; i < 10; i++) {
    let bgColor = i < refValue ? 'bg-white' : 'bg-blue';
    columns.push(<span className={'db pa2 mb1 ' + bgColor} key={i} />);
  }

  return (
    <div className="flex flex-column-ns flex-row-reverse mh2 w-100 tc mb2 mb0-ns">
      {columns} <span className="b tl tc-ns mr2 mr0-ns">{name}</span>
    </div>
  );
};

PokemonStatsItem.propTypes = {
  name: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired
};

export default PokemonStatsItem;
