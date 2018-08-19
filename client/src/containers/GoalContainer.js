import {connect} from 'react-redux';
import { slugify } from '../utils';
import Goal from '../components/Goal';
import {goalsFetchData, todosPostData, todosToggleTodo} from '../actions';

function mapDispatchToProps (dispatch) {
  return {
    fetchGoals: (url) => dispatch(goalsFetchData(url)),
    addTodo: (todo) => dispatch(todosPostData(todo)),
    toggleTodo: (todo) => dispatch(todosToggleTodo(todo))
  };
}

function mapStateToProps (state, nextProps) {
  const goalSlug = nextProps.match.params.goal;
  const { goals } = state;
  const goal = goals.filter(goal => slugify(goal.name) === goalSlug);

  return {
    goal: goal[0]
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Goal);
