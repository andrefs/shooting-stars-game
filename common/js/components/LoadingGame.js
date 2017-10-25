import React, {Component} from 'react';
import {Helmet} from 'react-helmet';
import {Container} from 'reactstrap';

class LoadingGame extends Component {

  render(){
    const {game, createGame} = this.props;

    return (
      <Container className="text-center">
        <img style={{top: '200px;', width: '400px'}} src="https://d13yacurqjgara.cloudfront.net/users/69182/screenshots/2179253/animated_loading__by__amiri.gif" />
      </Container>
    );
  }
}

export default LoadingGame;
