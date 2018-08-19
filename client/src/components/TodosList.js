import React, { Component } from "react";
import PropTypes from 'prop-types';
import Todo from './Todo';

class TodosList extends Component {

  toggleTodo = e => console.log('e', e.target.dataset.id);

  render() {
    const { todos } = this.props;

    return (
      <ul>
        {todos.map(todo => <Todo key={todo._id} todo={todo} toggleTodo={this.toggleTodo} />)}
      </ul>
    );
  }
}

TodosList.propTypes = {
  todos: PropTypes.array.isRequired
}

export default TodosList;
