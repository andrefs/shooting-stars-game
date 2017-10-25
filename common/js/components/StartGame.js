import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container, Button} from 'reactstrap';

class StartGame extends Component {

  render(){
    const {game, createGame} = this.props;

    return (
      <Container>
        <Button className="btn-info" size="xl" onClick={createGame}>Start</Button>
      </Container>
    );
  }
}

export default StartGame;
