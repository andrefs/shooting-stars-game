import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Button} from 'reactstrap';

class EndGame extends Component {

  render(){
    const {game, createGame} = this.props;

    return (
      <Container>
        <Button className="btn-info" onClick={createGame}>Play Again</Button>
      </Container>
    );
  }
}

export default EndGame;
