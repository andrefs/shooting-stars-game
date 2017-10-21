import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
import {Container, Header, Checkbox, List, Button, Form} from 'semantic-ui-react';
import classnames from 'classnames';
import css from './index.scss';
import StarsSVG from '../../components/StarsSVG';

const cx = classnames.bind(css);

class GameContainer extends Component {

  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  render() {

    return (
      <Container>
        <Helmet>
          <title>Shooting Stars</title>
        </Helmet>
        <Header>Shooting Stars</Header>
        <StarsSVG />
      </Container>
    );
  }
}

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(GameContainer);
