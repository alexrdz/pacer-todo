import React, { Component } from 'react';

class AddTodoForm extends Component {

  state = {
    text: ''
  };

  onChange = e => {
    const text = e.target.value;

    this.setState(() => ({text}));
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.addTodo({name: this.state.text, goal: this.props.goalId, completed: false});
    this.setState(() => ({text: ''}));
  }

  render() {
    return (
      <form 
        className="col-12 col-md-8 pt-5 px-2 mb-5 border-bottom mx-auto"
        onSubmit={this.onSubmit}>
        <input 
          ref={input => input && input.focus()}
          autoFocus
          className="form-control border-0" 
          type="text" 
          placeholder="Add a to-do and hit Enter..."
          onChange={this.onChange}
          value={this.state.text}
          />
      </form>
    );
  }
}

export default AddTodoForm;