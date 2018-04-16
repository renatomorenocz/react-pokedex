import axios from 'axios';

export function getPokemons(params = {}) {
  return axios.get('https://pokeapi.co/api/v2/pokemon/', { params });
}

export function getPokemon(idPokemon) {
  return axios.get('https://pokeapi.co/api/v2/pokemon/' + idPokemon);
}
