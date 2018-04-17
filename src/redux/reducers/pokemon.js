import {
  LIST_POKEMONS_LOAD_FAILURE,
  LIST_POKEMONS_LOAD_SUCCESS,
  LIST_POKEMONS_LOAD_REQUEST,
  POKEMON_LOAD_FAILURE,
  POKEMON_LOAD_SUCCESS,
  POKEMON_LOAD_REQUEST
} from '../actions/pokemon';

const initialState = {
  count: 0,
  pokemons: [],
  isLoading: true,
  isLoaded: false,
  currentPokemon: {},
  error: false
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POKEMON_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        currentPokemon: {},
        error: false
      };

    case LIST_POKEMONS_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        pokemons: [],
        currentPokemon: {},
        error: false
      };

    case LIST_POKEMONS_LOAD_FAILURE:
    case POKEMON_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: true
      };

    case LIST_POKEMONS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        pokemons: action.pokemons
      };

    case POKEMON_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        currentPokemon: action.pokemon
      };

    default:
      return state;
  }
};
