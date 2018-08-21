import React, { Component } from 'react';

class AddGoalForm extends Component {

  state = {
    text: '',
  };


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
    const slideClass = this.props.showForm ? ' d-block slideDown' : ' slideUp';
    

    return (
      <form className={`col-12 pt-5 px-2 mb-5 border-bottom mx-auto d-none ` + slideClass} onSubmit={this.onSubmit}>
        <input 
          ref={input => input && input.focus()}
          className="form-control border-0" 
          type="text" 
          placeholder="Add a Goal and hit Enter..."
          onChange={this.onChange}
          value={this.state.text}
          />
      </form>
    );
  }
}

export default AddGoalForm;