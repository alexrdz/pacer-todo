import React, { Component } from 'react';

class AddTodoForm extends Component {

  state = {
    text: ''
  }

  onChange = e => {
    const text = e.target.value;

    this.setState(() => ({text}));
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo({name: this.state.text, goal: this.props.goalId});
    this.setState(() => ({text: ''}));
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <input 
          type="text" 
          placeholder="What is your goal?"
          onChange={this.onChange}
          value={this.state.text}
          />
      </form>
    );
  }
}

export default AddTodoForm;