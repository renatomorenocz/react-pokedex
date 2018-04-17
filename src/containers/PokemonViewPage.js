import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { pokemonLoad } from '../redux/actions/pokemon';
import PokemonView from '../components/PokemonView';

class PokemonViewPage extends React.Component {
  componentDidMount() {
    this.props.pokemonLoad(this.props.match.params.name);
  }

  render() {
    return (
      <div className="w-60-ns w-80 center">
        <Helmet>
          <title>Pokemon View Page</title>
        </Helmet>

        <Link className="link underline blue hover-orange dib mt2 mb3" to="/">
          {'<'} back{' '}
        </Link>

        {!this.props.pokemonIsLoading && (
          <PokemonView pokemon={this.props.pokemon} />
        )}

        {this.props.pokemonIsLoading && (
          <div>
            <div className="flex">
              <div className="w-50 h6 br3 tc animated-background" />
              <div className="w-70 pl4">
                <div className="h3 br2 mb4 animated-background" />
                <div className="h4 br2 mb4 animated-background" />
                <span className="dib br2 mr3 h2 w4 animated-background" />
                <span className="dib br h2 w4 animated-background" />
              </div>
            </div>
            <div className="w-100 mt3 h5 br3 tc animated-background" />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    pokemonIsLoading: state.pokemon.isLoading,
    pokemon: state.pokemon.currentPokemon
  };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      pokemonLoad
    },
    dispatch
  );

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(PokemonViewPage)
);
