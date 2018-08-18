import {combineReducers} from 'redux';
import {goals, goalsHasErrored, goalsIsLoading, goalsPostData} from './goals-reducer';

const reducers = {
  goals,
  goalsHasErrored,
  goalsIsLoading,
  goalsPostData
}

const rootReducer = combineReducers(reducers);

export default rootReducer;