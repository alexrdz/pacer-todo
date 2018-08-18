import React, { Component } from "react";

class TodosList extends Component {
  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.name}>
            {todo.name} - {todo.completed ? "done" : "not done"}
          </li>
        ))}
      </ul>
    );
  }
}

export default TodosList;
