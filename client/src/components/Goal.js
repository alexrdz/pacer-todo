import React, { Component } from 'react';
import TodosList from './TodosList';
import AddTodoForm from './AddTodoForm';

class Goal extends Component {

  componentWillMount() {
    if(!this.props.goal) {
      this.props.fetchGoals('http://localhost:1337/goal/');
    }
  }
  
  render() {
    const { 
      goal,
      addTodo
     } = this.props;

    if (goal) {
      return (
        <div>
        <h2>{goal.name}</h2>
        <TodosList todos={goal.todo} />
        <AddTodoForm addTodo={addTodo} goalId={goal._id} />
        </div>
      );
    } else {
      return <p>Loading...</p>
    }
  }
}

export default Goal;