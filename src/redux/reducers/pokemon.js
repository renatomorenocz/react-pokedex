import {
  POKEMONS_LOAD_FAILURE,
  POKEMONS_LOAD_SUCCESS,
  POKEMONS_LOAD_REQUEST
} from '../actions/pokemon';

const initialState = {
  count: 0,
  pokemons: [],
  isLoading: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case POKEMONS_LOAD_REQUEST:
      return {
        ...state,
        isLoading: true,
        pokemons: []
      };

    case POKEMONS_LOAD_FAILURE:
      return {
        ...state,
        isLoading: false
      };

    case POKEMONS_LOAD_SUCCESS:
      return {
        ...state,
        isLoading: false,
        pokemons: action.pokemons
      };

    default:
      return state;
  }
};
