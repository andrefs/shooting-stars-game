import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Row, Col} from 'reactstrap';
import css from './ScoreBoard.scss';

class ScoreBoard extends Component {

  render(){
    const {players, currentScore} = this.props;

    return (
      <Row>
        <Col lg="12" className={css.artists}>
          <div id={css.scoreArea}>
          <p>{players.sync.username} : {currentScore.sync}</p>
          <p>{players.async ? players.async.username : 'Dilbert'} : {currentScore.async}</p>
          <p>Lucy : {currentScore.bot}</p>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ScoreBoard;
