import React, {Component} from 'react';
import {Row, Col, Badge, Table} from 'reactstrap';
import css from './GenericScoreBoard.scss';
import classnames from 'classnames';

class GenericScoreBoard extends Component {

  render(){
    const {title, players} = this.props;

    return (
      <Row>
        <Col md={{size:8, offset:2}} className={classnames(css.artists, 'text-center')}>
          <h2>{title}</h2>
          <div id={css.scoreArea}>
            <Table>
              <tbody>
                {players.map((p, i) => {
                  return (
                    <tr  key={i}>
                      { p.ranking ? <td>#{p.ranking}</td> : null }
                      <td></td>
                      <td>{p.username}</td>
                      <td className={css.score}><Badge color="info">{p.score}</Badge></td>
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
