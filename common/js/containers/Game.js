import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';
//import {Container, Header, Checkbox, List, Button, Form} from 'semantic-ui-react';

import {Container, Row, Col} from 'reactstrap';
import classnames from 'classnames';
import css from './Game.scss';
import StarsSVG from '../components/StarsSVG';

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
        <Col lg="10">
          <div className="header clearfix">
          </div>

          <Row>
            <Col lg="12" className={css.artists}>
              <div className="star-container">
                <StarsSVG />
              </div>
              <div className="labels">
                <div className="label left">
                  <span>Justin Bieber</span>
                </div>
                <div className="label center">
                  <span>Carlos Paião</span>
                </div>
                <div className="label right">
                  <span>Charles Bradley</span>
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

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(GameContainer);
