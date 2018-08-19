import axios from "axios";

import {
  FETCH_GOALS,
  GOALS_HAS_ERRORED,
  GOALS_IS_LOADING,
  GOALS_FETCH_DATA_SUCCESS,
  GOAL_POST_DATA,
  API_GOALS
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

export function goalsFetchGoalData(goalId) {
  return dispatch => {
    dispatch(goalsIsLoading(true));
    fetch(`${API_GOALS}${goalId}`)
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        dispatch(goalsIsLoading(false));
        return response.json();
      })
      .then(response => response)
      .then(() => dispatch(goalsFetchData(API_GOALS)))
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



export function todosPostData(todo) {
  return dispatch => {
    fetch('http://localhost:1337/todo/', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('data', data);
      return dispatch(goalsFetchGoalData(data.goal._id))
    })
    .catch((error) => console.log('error', error))
  }
}



export function todosToggleTodo(todo) {
  return dispatch => {
    console.log('todo', todo);
    fetch(`http://localhost:1337/todo/${todo._id}`, {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(todo)
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log('data', data);
      // get goalId = data.goal._id
      // fetch goal and update state
      return dispatch(goalsFetchGoalData(data.goal._id))
    })
    .catch((error) => console.log('error', error))
  }
}
