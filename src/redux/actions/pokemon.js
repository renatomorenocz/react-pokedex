import * as api from '../../api';
import axios from 'axios';

export const LIST_POKEMONS_LOAD_REQUEST = 'LIST_POKEMONS_LOAD_REQUEST';
export const LIST_POKEMONS_LOAD_SUCCESS = 'LIST_POKEMONS_LOAD_SUCCESS';
export const LIST_POKEMONS_LOAD_FAILURE = 'LIST_POKEMONS_LOAD_FAILURE';

export const POKEMON_LOAD_REQUEST = 'POKEMON_LOAD_REQUEST';
export const POKEMON_LOAD_SUCCESS = 'POKEMON_LOAD_SUCCESS';
export const POKEMON_LOAD_FAILURE = 'POKEMON_LOAD_FAILURE';

export const pokemonsLoad = () => dispatch => {
  dispatch({ type: LIST_POKEMONS_LOAD_REQUEST });
  if (!!localStorage.getItem('listOfPokemons')) {
    return setTimeout(() => {
      dispatch({
        type: LIST_POKEMONS_LOAD_SUCCESS,
        pokemons: JSON.parse(localStorage.getItem('listOfPokemons'))
      });
    }, 300);
  }

  api
    .getPokemons({ limit: 1 })
    .then(res => {
      let qtdResquest = res.data.count / 60;
      let listOfRequests = [];
      let listOfPokemons = [];

      for (let i = 0; i < qtdResquest; i++) {
        listOfRequests.push(
          api.getPokemons({
            limit: 60,
            offset: 60 * i
          })
        );
      }

      axios
        .all(listOfRequests)
        .then(res => {
          for (let i = 0; i < res.length; i++) {
            listOfPokemons.push(...res[i].data.results);
          }

          localStorage.setItem(
            'listOfPokemons',
            JSON.stringify(listOfPokemons)
          );
          dispatch({
            type: LIST_POKEMONS_LOAD_SUCCESS,
            pokemons: listOfPokemons
          });
        })
        .catch(() => dispatch({ type: LIST_POKEMONS_LOAD_FAILURE }));
    })
    .catch(() => dispatch({ type: LIST_POKEMONS_LOAD_FAILURE }));
};

export const pokemonLoad = idPokemon => dispatch => {
  dispatch({ type: POKEMON_LOAD_REQUEST });

  api
    .getPokemon(idPokemon)
    .then(res => {
      dispatch({
        type: POKEMON_LOAD_SUCCESS,
        pokemon: res.data
      });
    })
    .catch(() => dispatch({ type: POKEMON_LOAD_FAILURE }));
};
