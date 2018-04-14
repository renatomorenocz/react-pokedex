import PokemonListPage from '../containers/PokemonListPage';
import PokemonViewPage from '../containers/PokemonViewPage';

export default [
  {
    path: '/',
    component: PokemonListPage,
    exact: true
  },
  {
    path: '/pokemon/:name',
    component: PokemonViewPage
  }
];
