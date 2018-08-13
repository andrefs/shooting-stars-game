import React, {Component} from 'react';
import GenericScoreBoard from '../components/GenericScoreBoard';

class GameScore extends Component {

  render(){
    const {title, player, opponentNames, currentScore} = this.props;

    const _players = [
      {
        username: player.username,
        score: currentScore.player
      },{
        username: opponentNames.rand1,
        score: currentScore.rand1
      },{
        username: opponentNames.rand2,
        score: currentScore.rand2
      }];


    return (
      <GenericScoreBoard players={_players} title={title || 'Game'} />
    );
  }
}

export default GameScore;
