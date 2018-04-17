import React from 'react';
import PropTypes from 'prop-types';
import PokemonStatsItem from './PokemonStatsItem';

const PokemonStats = ({ stats }) => (
  <div className="flex justify-between flex-column flex-row-ns">
    {stats.map((stat, index) => (
      <PokemonStatsItem
        key={index}
        name={stat.stat.name}
        value={stat.base_stat}
      />
    ))}
  </div>
);

PokemonStats.propTypes = {
  stats: PropTypes.array.isRequired
};

export default PokemonStats;
