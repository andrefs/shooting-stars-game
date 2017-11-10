import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

// import {showFlash} from '../actions/flash';
import Login from '../components/Login';

class LoginContainer extends Component {

  emptyState = {
    username: '',
    age: '',
    gender: ''
  };

  constructor(props){
    super(props);
    this.state = this.emptyState;
    this.handleClearForm      = this.handleClearForm.bind(this);
    this.handleFormSubmit     = this.handleFormSubmit.bind(this);
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handleAgeChange      = this.handleAgeChange.bind(this);
    this.handleGenderSelect   = this.handleGenderSelect.bind(this);
  }

	handleUsernameChange(e) {
		this.setState({username: e.target.value});
	}
	handleAgeChange(e) {
		this.setState({age: e.target.value});
	}
	handleGenderSelect(e) {
		this.setState({gender: e.target.value});
	}
	handleClearForm(e) {
		e.preventDefault();
		this.setState(this.emptyState);
	}
	handleFormSubmit(e) {
		e.preventDefault();

		const formPayload = {
			username: this.state.username,
			age: this.state.age,
			gender: this.state.gender
		};

		console.log('Send this in a POST request:', formPayload);
		this.handleClearForm(e);
	}

  render() {
    return (
      <Login
        username={this.state.username}
        age={this.state.age}
        gender={this.state.gender}
        handleClearForm={this.handleClearForm}
        handleFormSubmit={this.handleFormSubmit}
        handleUsernameChange={this.handleUsernameChange}
        handleAgeChange={this.handleAgeChange}
        handleGenderSelect={this.handleGenderSelect}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer);
