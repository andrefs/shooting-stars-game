import React, {Component} from 'react';
// import PropTypes from 'prop-types';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import {fetchBestScores} from '../actions/bestScores';
import GenericScoreBoard from '../components/GenericScoreBoard';

class BestScoresContainer extends Component {

  componentDidMount() {
    const {bestScores} = this.props;

    if (!bestScores || !bestScores.isFetched) {
      this.props.fetchBestScores();
    }
  }

  render() {
    const {bestScores} = this.props;

    if(bestScores && bestScores.isFetched){
      return (
        <GenericScoreBoard scores={bestScores.player} />
      );
    } else {
      return null;
    }
  }
}

const mapStateToProps = state => {
  return {
    bestScores: state.bestScores
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators({
    fetchBestScores,
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(BestScoresContainer);
