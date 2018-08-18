import React, { Component } from 'react';
import TodosList from './TodosList';

class GoalsList extends Component {
  render() {
    const {goals} = this.props;
    
    const list = goals.map(goal => (
      <li key={goal._id}>
        {goal.name}
        <TodosList todos={goal.todo} />
      </li>
    ));
    
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

export default GoalsList;