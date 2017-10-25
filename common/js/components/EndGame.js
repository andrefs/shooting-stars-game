import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Button} from 'reactstrap';
import GameScore from './GameScore';

class EndGame extends Component {

  render(){
    const {game, createGame} = this.props;

    return (
      <Container className="text-center">
        <div className="header clearfix">
        </div>
        <GameScore players={game.players} currentScore={game.currentScore} />
        <Button style={{marginTop: '200px;'}} className="btn-info" size="lg" onClick={createGame}>Play Again</Button>
      </Container>
    );
  }
}

export default EndGame;
