import React, {Component} from 'react';
import {Badge, Container, ButtonGroup, Button, Row, Col, Input, Form, FormGroup, Label} from 'reactstrap';
import FaFacebook from 'react-icons/lib/fa/facebook';
import FaGoogle   from 'react-icons/lib/fa/google';
import TitleBar from './TitleBar';
import css from './Login.scss';
import cn from 'classnames';

class Login extends Component {

  render(){

    const submitEnabled = this.props.username && this.props.username.length > 0;

    return (
      <Container>
        <TitleBar title="Player details"/>
        <Row className={css.loginForm}>
          <Col md={{size:8, offset:2}}>
            <Form onSubmit={this.props.handleFormSubmit}>
              <Container className={css.bordered}>
                <Row>
                  <Col>
                    <FormGroup>
                      <Label for="username"><Badge className={css.badge} color="secondary">1</Badge> Choose a username or enter your email address</Label>
                      <Input
                        id="username"
                        name="username"
                        required
                        minLength="6"
                        onChange={this.props.handleUsernameChange}
                        value={this.props.username}
                        className={cn(css.username, 'form-control-lg')}
                        placeholder="Required"/>
                    </FormGroup>
                  </Col>
                </Row>
                <Row>
                  <Col xs={{size:6}}>
                    <FormGroup>
                      <Label for="age"><Badge className={css.badge} color="secondary">2</Badge> Tell us your age</Label>
                      <Input
                      id="age"
                      name="age"
                      type="number"
                      min="0"
                      max="130"
                      onChange={this.props.handleAgeChange}
                      value={this.props.age}
                      className={cn(css.age, 'form-control-lg')} />
                    </FormGroup>
                  </Col>
                  <Col xs={{size:6}}>
                    <FormGroup>
                      <Label for="gender"><Badge className={css.badge} color="secondary">3</Badge> And your gender</Label>
                      <Input
                        id="gender"
                        name="gender"
                        type="select"
                        onChange={this.props.handleGenderSelect}
                        value={this.props.gender}
                        className={cn(css.gender, 'form-control-lg')} >
                        <option></option>
                        <option>Male</option>
                        <option>Female</option>
                      </Input>
                    </FormGroup>
                  </Col>
                  <Col md={{size:8, offset:2}}>
                    <Button
                      block
                      type="submit"
                      size="lg"
                      disabled={!submitEnabled}
                      className={cn(css.loginButton, 'btn-info')}>Let's get playin'!</Button>
                  </Col>
                </Row>
              </Container>

              <Container className={css.bordered}>
                <Row>
                  <Col>
                    <FormGroup className={css.socialButtons}>
                      <Label>Or login using a social network</Label>
                      <ButtonGroup size="lg" className='btn-block'>
                        <Button block className={css.facebook}><FaFacebook size="30"/></Button>
                        <Button block className={css.google}><FaGoogle size="30"/></Button>
                      </ButtonGroup>
                    </FormGroup>
                  </Col>
                </Row>
              </Container>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
