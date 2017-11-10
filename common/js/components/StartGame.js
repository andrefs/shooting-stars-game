import React, {Component} from 'react';
import {Container, Button} from 'reactstrap';

class StartGame extends Component {

  render(){
    const {createGame} = this.props;

    return (
      <Container className="text-center">
        <div className="header clearfix">
        </div>
        <Button  style={{top: '200px'}} className="btn-info" size="lg" onClick={createGame}>Start</Button>
      </Container>
    );
  }
}

export default StartGame;
