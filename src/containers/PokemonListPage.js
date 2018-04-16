import React from 'react';
import Helmet from 'react-helmet';
import PokemonList from '../components/PokemonList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pokemonsLoad } from '../redux/actions/pokemon';

const listPoksssemons = {
  count: 946,
  previous: null,
  results: [
    { url: 'https://pokeapi.co/api/v2/pokemon/1/', name: 'bulbasaur' },
    { url: 'https://pokeapi.co/api/v2/pokemon/2/', name: 'ivysaur' },
    { url: 'https://pokeapi.co/api/v2/pokemon/3/', name: 'venusaur' },
    { url: 'https://pokeapi.co/api/v2/pokemon/4/', name: 'charmander' },
    { url: 'https://pokeapi.co/api/v2/pokemon/5/', name: 'charmeleon' },
    { url: 'https://pokeapi.co/api/v2/pokemon/6/', name: 'charizard' },
    { url: 'https://pokeapi.co/api/v2/pokemon/7/', name: 'squirtle' },
    { url: 'https://pokeapi.co/api/v2/pokemon/8/', name: 'wartortle' },
    { url: 'https://pokeapi.co/api/v2/pokemon/9/', name: 'blastoise' },
    { url: 'https://pokeapi.co/api/v2/pokemon/10/', name: 'caterpie' },
    { url: 'https://pokeapi.co/api/v2/pokemon/11/', name: 'metapod' },
    { url: 'https://pokeapi.co/api/v2/pokemon/12/', name: 'butterfree' },
    { url: 'https://pokeapi.co/api/v2/pokemon/13/', name: 'weedle' },
    { url: 'https://pokeapi.co/api/v2/pokemon/14/', name: 'kakuna' },
    { url: 'https://pokeapi.co/api/v2/pokemon/15/', name: 'beedrill' },
    { url: 'https://pokeapi.co/api/v2/pokemon/16/', name: 'pidgey' },
    { url: 'https://pokeapi.co/api/v2/pokemon/17/', name: 'pidgeotto' },
    { url: 'https://pokeapi.co/api/v2/pokemon/18/', name: 'pidgeot' },
    { url: 'https://pokeapi.co/api/v2/pokemon/19/', name: 'rattata' },
    { url: 'https://pokeapi.co/api/v2/pokemon/20/', name: 'raticate' }
  ]
};

class PokemonListPage extends React.Component {
  componentDidMount() {
    this.props.pokemonsLoad();
  }

  render() {
    return (
      <div className="mw-80 center">
        <Helmet>
          <title>React Pokedex</title>
        </Helmet>
        <h1 className="h1 tc mb5 ">React Pokedex</h1>

        {!this.props.pokemonIsLoading && (
          <PokemonList data={this.props.listPokemons} />
        )}
        {this.props.pokemonIsLoading && <p className="f4 tc green">Wait ...</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    pokemonIsLoading: state.pokemon.isLoading,
    listPokemons: state.pokemon.pokemons
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      pokemonsLoad
    },
    dispatch
  );

// export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PokemonListPage))
export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PokemonListPage)
);
