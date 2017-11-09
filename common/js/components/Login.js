import React, {Component} from 'react';
import {Container, Button, Row, Col, Input} from 'reactstrap';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle   from 'react-icons/lib/fa/google';
import TitleBar from './TitleBar';
import css from './Login.scss';
import cn from 'classnames';

class Login extends Component {

  render(){

    return (
      <Container>
        <TitleBar title="Login"/>
        <Row className={css.loginForm}>
            <Col md={{size:6, offset:3}}>
              <Row>
                <Col md={{size:6}}>
                <Button block size="lg" className={css.facebook}><FaFacebook /></Button>
                </Col>
                <Col md={{size:6}}>
                <Button block size="lg" className={css.google}><FaGoogle  /></Button>
                </Col>
                <Col md={{size:6}}>
                <Button block size="lg" className={css.facebook}><FaFacebook /></Button>
                </Col>
                <Col md={{size:6}}>
                <Button block size="lg" className={css.google}><FaGoogle  /></Button>
                </Col>
                <Col md={{size:6}}>
                <Button block size="lg" className={css.facebook}><FaFacebook /></Button>
                </Col>
                <Col md={{size:6}}>
                <Button block size="lg" className={css.google}><FaGoogle  /></Button>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Input placeholder="Email address" />
                  <Input placeholder="Password" />
                </Col>
              </Row>
            </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
