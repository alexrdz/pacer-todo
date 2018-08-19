import React, { Component } from 'react';
import TodosList from './TodosList';

class Goal extends Component {
  render() {
    const { goal } = this.props;

    if (goal) {
      return (
        <div>
        <h2>{goal.name}</h2>
        <TodosList todos={goal.todo} />
        </div>
      );
    } else {
      return <p>Loading...</p>
    }
  }
}

export default Goal;