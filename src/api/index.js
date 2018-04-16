import axios from 'axios';

export function getPokemons(params = {}) {
  return axios.get('https://pokeapi.co/api/v2/pokemon/', { params });
}
