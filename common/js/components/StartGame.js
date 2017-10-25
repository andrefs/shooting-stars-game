import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Button} from 'reactstrap';

class StartGame extends Component {

  render(){
    const {game, startGame} = this.props;

    return (
      <Container>
        <Button onClick={startGame}>Start</Button>
      </Container>
    );
  }
}

export default StartGame;
