import axios from "axios";

import {
  FETCH_GOALS,
  GOALS_HAS_ERRORED,
  GOALS_IS_LOADING,
  GOALS_FETCH_DATA_SUCCESS,
  GOAL_POST_DATA
} from "../constants";

export function goalsHasErrored(bool) {
  return {
    type: GOALS_HAS_ERRORED,
    hasErrored: bool
  };
}

export function goalsIsLoading(bool) {
  return {
    type: GOALS_IS_LOADING,
    isLoading: bool
  };
}

export function goalsFetchDataSuccess(goals) {
  return {
    type: GOALS_FETCH_DATA_SUCCESS,
    goals
  };
}


export function goalsFetchData(url) {
  return dispatch => {
    dispatch(goalsIsLoading(true));
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(goalsIsLoading(false));
        return response.json();
      })
      .then(response => response)
      .then(data => dispatch(goalsFetchDataSuccess(data)))
      .catch(() => dispatch(goalsHasErrored(true)));
  };
}



export function goalsPostDataSuccess(goal) {
  return {
    type: GOAL_POST_DATA,
    goal
  };
}
export function goalsPostData(goal) {
  return dispatch => {
    fetch('http://localhost:1337/goal/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(goal)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      return dispatch(goalsPostDataSuccess(data))
    })
    .catch((error) => console.log('error', error))
  }
}

