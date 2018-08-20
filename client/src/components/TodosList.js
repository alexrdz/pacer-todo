import React, { Component } from "react";
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodosList extends Component {

  toggleTodo = e => {
    const todoId = e.target.dataset.id;
    const completed = !e.target.dataset.completed;

    return this.props.toggleTodo({_id: todoId, completed: !completed});
  };

  render() {
    const { todos } = this.props;
    const pendingTodos = todos.filter(todo => !todo.completed).splice(0,3);

    return (
      <ul>
        {pendingTodos.map(todo => <Todo key={todo._id} todo={todo} toggleTodo={this.toggleTodo} />)}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodosList;
