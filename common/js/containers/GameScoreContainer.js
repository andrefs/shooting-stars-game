import React, {Component} from 'react';
import GenericScoreBoard from '../components/GenericScoreBoard';

class GameScore extends Component {

  render(){
    const {title, players, currentScore} = this.props;

    const _players = [{
        username: players.sync.username,
        score: currentScore.sync
      },{
        username: players.async ? players.async.username : 'Dilbert',
        score: currentScore.async
      },{
        username: 'Lucy',
        score: currentScore.bot
      }];


    return (
      <GenericScoreBoard players={_players} title={title || 'Game'} />
    );
  }
}

export default GameScore;
