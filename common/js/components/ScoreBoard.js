import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Row, Col, Badge, Table} from 'reactstrap';
import css from './ScoreBoard.scss';

class ScoreBoard extends Component {

  render(){
    const {players, currentScore} = this.props;

    return (
      <Row>
        <Col md={{size:8, offset:2}} className={css.artists}>
          <div id={css.scoreArea}>
            <Table>
              <tbody>
              <tr><td>{players.sync.username}</td><td className={css.score}><Badge color="info">{currentScore.sync}</Badge></td></tr>
              <tr><td>{players.async ? players.async.username : 'Dilbert'}</td><td className={css.score}><Badge color="info">{currentScore.async}</Badge></td></tr>
              <tr><td>Lucy</td><td className={css.score}><Badge color="info">{currentScore.bot}</Badge></td></tr>
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    );
  }
}

export default ScoreBoard;
