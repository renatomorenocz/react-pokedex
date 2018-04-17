import React from 'react';
import Helmet from 'react-helmet';
import PokemonList from '../components/PokemonList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pokemonsLoad } from '../redux/actions/pokemon';

class PokemonListPage extends React.Component {
  componentDidMount() {
    console.log(this.props);
    if (!this.props.isLoaded) {
      this.props.pokemonsLoad();
    }
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
          <div className="ph4-l ph2 ph-3-m">
            <p className="f6 tc green">Wait ...</p>

            <ul className="list flex flex-wrap justify-center ma0 pa0">
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
              <li className="w-90 w-25-m w-20-l pa3 br3">
                <div className="animated-background h4" />
              </li>
            </ul>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemonIsLoading: state.pokemon.isLoading,
    listPokemons: state.pokemon.pokemons,
    isLoaded: state.pokemon.isLoaded
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
