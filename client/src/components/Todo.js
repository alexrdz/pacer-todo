import React from 'react';

function Todo (props) {
  const {todo, toggleTodo} = props;

  return (
    <li key={todo._id} data-id={todo._id} onClick={toggleTodo}>
      {todo.name} - {todo.completed ? "done" : "not done"}
    </li>
  );
}

export default Todo;