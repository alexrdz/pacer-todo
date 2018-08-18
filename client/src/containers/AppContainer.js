import {connect} from 'react-redux';

import App from '../App';
import {goalsFetchData, goalsPostData} from '../actions/index';

function mapDispatchToProps(dispatch) {
  return {
    fetchGoals: (url) => dispatch(goalsFetchData(url)),
    addGoal: (goal) => dispatch(goalsPostData(goal))
  };
}

function mapStateToProps(state) {
  const {
    goals,
    goalsHasErrored,
    goalsIsLoading,
    goalsPostData
  } = state;

  return {
    goals,
    hasErrored: goalsHasErrored,
    isLoading: goalsIsLoading,
    addedGoal: goalsPostData
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
