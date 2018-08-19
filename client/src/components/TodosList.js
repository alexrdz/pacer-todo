import React, { Component } from "react";
import PropTypes from 'prop-types';

class TodosList extends Component {

  toggleTodo = e => console.log('e', e.target.dataset.id);

  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.map(todo => (
          <li key={todo._id} data-id={todo._id} onClick={this.toggleTodo}>
            {todo.name} - {todo.completed ? "done" : "not done"}
          </li>
        ))}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodosList;
