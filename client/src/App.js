import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
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
        <AddGoalForm addGoal={addGoal} />
        <GoalsList goals={allGoals} />
        <Link to="/about">About</Link>
        <main>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </main>
      </div>
    );
  }
}

export default App;
