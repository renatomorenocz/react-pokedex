import axios from 'axios';

const URL_API = 'https://pokeapi.co/api/v2/pokemon/';

export function getPokemons(params = {}) {
  return axios.get(URL_API, { params });
}

export function getPokemon(idPokemon) {
  return axios.get(URL_API + idPokemon);
}
