import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import GoalsList from './components/GoalsList';
import AddGoalForm from './components/AddGoalForm';

class App extends Component {

  componentDidMount() {
    this.props.fetchGoals('http://localhost:1337/goal/');
  }

  
  render() {

    if (this.props.hasErrored) {
      return <p>Ufas! There was an error loading the data.</p>
    }

    if (this.props.isLoading) {
      return <p>Loading...</p>
    }

    const {
      goals, 
      addGoal,
      addedGoal
    } = this.props;
    let allGoals = goals;
    
    if (addedGoal.name) {
      allGoals = [...goals, addedGoal];
    }

    return (
      <div>
        Pacer
        <br/>
        <main>
          <AddGoalForm addGoal={addGoal} />
          <GoalsList goals={allGoals} />
        </main>
      </div>
    );
  }
}

export default App;
