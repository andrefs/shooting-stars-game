import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchGame, postPick, startGame, createGame} from 'actions/game';
import Game from '../components/Game';
import LoadingGame from '../components/LoadingGame';
import StartGame from '../components/StartGame';
import EndGame from '../components/EndGame';

class GameContainer extends Component {

  componentDidMount() {
    const {game} = this.props;

    if (!game || !game.isFetched) {
      this.props.fetchGame();
    }
  }

  startGame = () => {
    this.props.startGame();
  }

  createGame = () => {
    this.props.createGame();
  }

  selectItem = (position) => {
    const positionToPick = {
      A: 'BC',
      B: 'AC',
      C: 'AB'
    };
    const pick = positionToPick[position];

    this.props.postPick(pick);
  }

  render() {
    const {game} = this.props;

    // game is loading
    if(!game || game.isFetching){
      return (
        <LoadingGame
          game={game}
        />
      );
    }
    // no game currently being played
    else if (game && game.fetchFailed){
      return (
        <StartGame
          game={game}
          createGame={this.createGame}
        />
      );

    }
    // current game is finished
    else if(game && game.isFinished && !game.hasEnded) {
      return (
        <EndGame
          game={game}
          createGame={this.createGame}
        />
      );
    }
    // we're in the middle of a game
    else {
      return (
        <Game game={game}
          selectItem={this.selectItem}
        />
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    game: state.game
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchGame,
    postPick,
    startGame,
    createGame
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(GameContainer);
