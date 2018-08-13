import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Row, Col} from 'reactstrap';
import css from './Game.scss';
import StarsSVG from './StarsSVG';
import {knuthShuffle} from 'knuth-shuffle';
import classnames from 'classnames';
import GameScoreContainer from '../containers/GameScoreContainer';
import TitleBar from './TitleBar';
import FlashContainer from '../containers/FlashContainer';

class Game extends Component {

  render(){
    const {game, selectItem} = this.props;

    if(!game || !game.isFetched){
      return <Container />;
    }

    // shuffle items to place them randomly
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

        <TitleBar title={'Round '+(game.turns.previous.length+1)+'/10'} />
        <FlashContainer />

        <Col md={{size:8, offset:2}}>
          <Row>
            <Col lg="12" className={css.artists}>
              <div className="star-container">
                <StarsSVG items={items} selectItem={selectItem} />
              </div>
              <div className={css.labels}>
                <div className={classnames(css.label,  css.left)}>
                  <span>{items[0].name}</span>
                </div>
                <div className={classnames(css.label, css.center)}>
                  <span>{items[1].name}</span>
                </div>
                <div className={classnames(css.label, css.right)}>
                  <span>{items[2].name}</span>
                </div>
              </div>
            </Col>
          </Row>
          <GameScoreContainer
            title="Score"
            currentScore={game.currentScore}
            player={game.player}
            opponentNames={game.opponentNames}
            />
        </Col>
      </Container>
    );
  }
}

export default Game;
