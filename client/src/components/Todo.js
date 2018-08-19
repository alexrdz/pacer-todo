import React from 'react';

function Todo (props) {
  const {todo, toggleTodo} = props;

  return (
    <li key={todo._id} data-id={todo._id} data-completed={todo.completed} onClick={toggleTodo}>
      {todo.name}
    </li>
  );
}

export default Todo;