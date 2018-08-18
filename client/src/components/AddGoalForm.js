import React, { Component } from 'react';

class AddGoalForm extends Component {

  state = {
    text: ''
  }

  onChange = e => {
    const text = e.target.value;

    this.setState(() => ({text}));
  }
  
  onSubmit = e => {
    e.preventDefault();
    this.props.addGoal({name: this.state.text});
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

export default AddGoalForm;