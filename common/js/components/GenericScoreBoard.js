import React, {Component} from 'react';
import {Row, Col, Badge, Table} from 'reactstrap';
import css from './GenericScoreBoard.scss';
import classnames from 'classnames';

class GenericScoreBoard extends Component {

  render(){
    const {title, players, columnHeaders} = this.props;

    return (
      <Row>
        <Col md={{size:10, offset:1}} className={classnames(css.artists, 'text-center')}>
          <h2>{title}</h2>
          <div id={css.scoreArea}>
            <Table>
            {columnHeaders ?
              <thead>
                <tr>
                  {players[0].ranking ? <td>Ranking</td> : null}
                  <td>Player</td>
                  <td>Score</td>
                  {players[0].games ? <td>Games Played</td> : null}
                </tr>
              </thead>
              : null
            }
              <tbody>
                {players.map((p, i) => {
                  return (
                    <tr  key={i}>
                      { p.ranking ? <td>#{p.ranking}</td> : null }
                      <td>{p.username}</td>
                      <td className={css.score}><Badge color="info">{p.score}</Badge></td>
                      { p.games? <td>{p.games}</td> : null }
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </div>
        </Col>
      </Row>
    );
  }
}

export default GenericScoreBoard;
