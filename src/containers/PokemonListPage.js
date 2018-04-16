import React from 'react';
import Helmet from 'react-helmet';
import PokemonList from '../components/PokemonList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pokemonsLoad } from '../redux/actions/pokemon';

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
        {this.props.pokemonIsLoading && (
          <div>
            <p className="f6 tc green">Wait ...</p>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
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

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PokemonListPage)
);
