import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {fetchGame} from 'actions/game';
import Game from '../components/Game';

class GameContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount() {
    const {dispatch, game} = this.props;

    if (!game || !game.isFetched) {
      dispatch(fetchGame());
    }
  }

  selectItem(ev) {
    console.log('XXXXXXXXXXXXXX ev', ev);
  }

  render() {
    const {game} = this.props;

    return (
      <Game game={game} selectItem={this.selectItem}/>
    );
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  };
};

export default connect(mapStateToProps)(GameContainer);
