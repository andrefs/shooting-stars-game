import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'reactstrap';
import css from './Game.scss';
import StarsSVG from '../components/StarsSVG';
import {knuthShuffle} from 'knuth-shuffle';

class Game extends Component {

  render(){
    const {game, selectItem} = this.props;

    if(!game || !game.isFetched){
      return <Container />;
    }

    const triple = game.turns.current.triple;
    const items = knuthShuffle([{
      name: triple.itemA.name,
      imageUrl: triple.itemA.imageUrl,
      position: 'A'
    },{
      name: triple.itemB.name,
      imageUrl: triple.itemB.imageUrl,
      position: 'B'
    },{
      name: triple.itemC.name,
      imageUrl: triple.itemC.imageUrl,
      position: 'C'
    }]);

    return (
      <Container>
        <Helmet>
          <title>Shooting Stars</title>
        </Helmet>
        <Col lg="10">
          <div className="header clearfix">
          </div>

          <Row>
            <Col lg="12" className={css.artists}>
              <div className="star-container">
                <StarsSVG items={items} selectItem={selectItem} />
              </div>
              <div className="labels">
                <div className="label left">
                  <span>{items[0].name}</span>
                </div>
                <div className="label center">
                  <span>{items[1].name}</span>
                </div>
                <div className="label right">
                  <span>{items[2].name}</span>
                </div>
              </div>
            </Col>
          </Row>
          <Row>
            <Col lg="12" className="artists">
              <div id="score-area">
              </div>
            </Col>
          </Row>
        </Col>
      </Container>
    );
  }
}

export default Game;
