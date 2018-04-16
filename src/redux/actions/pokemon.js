import * as api from '../../api';
import axios from 'axios';

export const POKEMONS_LOAD_REQUEST = 'POKEMON_LOAD_REQUEST';
export const POKEMONS_LOAD_SUCCESS = 'POKEMON_LOAD_SUCCESS';
export const POKEMONS_LOAD_FAILURE = 'POKEMON_LOAD_FAILURE';

export const pokemonsLoad = () => dispatch => {
  dispatch({ type: POKEMONS_LOAD_REQUEST });
  if (!!localStorage.getItem('listOfPokemons')) {
    return setTimeout(() => {
      dispatch({
        type: POKEMONS_LOAD_SUCCESS,
        pokemons: JSON.parse(localStorage.getItem('listOfPokemons'))
      });
    }, 1000);
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
          dispatch({ type: POKEMONS_LOAD_SUCCESS, pokemons: listOfPokemons });
        })
        .catch(() => dispatch({ type: POKEMONS_LOAD_FAILURE }));
    })
    .catch(() => dispatch({ type: POKEMONS_LOAD_FAILURE }));
};
