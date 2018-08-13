import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Button} from 'reactstrap';
import GameScoreContainer from '../containers/GameScoreContainer';
import BestScoresContainer from '../containers/BestScoresContainer';
import TitleBar from './TitleBar';

class EndGame extends Component {

  render(){
    const {game, createGame} = this.props;

    return (
      <Container className="text-center">
        <TitleBar />

        <GameScoreContainer player={game.player} opponentNames={game.opponentNames} currentScore={game.currentScore} />
        <BestScoresContainer />
        <Button className="btn-info" size="lg" onClick={createGame}>Play Again</Button>
      </Container>
    );
  }
}

export default EndGame;
