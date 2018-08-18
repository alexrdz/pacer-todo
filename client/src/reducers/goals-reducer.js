import {
  FETCH_GOALS,
  GOALS_HAS_ERRORED,
  GOALS_IS_LOADING,
  GOALS_FETCH_DATA_SUCCESS,
  GOAL_POST_DATA
} from "../constants";

export function goalsHasErrored(state = false, action) {
  switch (action.type) {
    case GOALS_HAS_ERRORED:
      return action.hasErrored;
    default:
      return state;
  }
}
export function goalsIsLoading(state = false, action) {
  switch (action.type) {
    case GOALS_IS_LOADING:
      return action.isLoading;
    default:
      return state;
  }
}
export function goals(state = [], action) {
  switch (action.type) {
    case GOALS_FETCH_DATA_SUCCESS:
      return action.goals;
    default:
      return state;
  }
}

export function goalsPostData(state = [], action) {
  switch (action.type) {
    case GOAL_POST_DATA:
      return action.goal;
    default:
      return state;
  }
}
