import React, { Component } from 'react';
import {Link } from 'react-router-dom';
import Nav from './components/Nav';
import AppNav from './components/AppNav';
import GoalsList from './components/GoalsList';

const logo = './assets/img/pacer-logo.svg';

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
        <Nav />
        <main>
          <img src={logo} className="d-block mx-auto mb-4" />
          
          <GoalsList goals={allGoals} addGoal={addGoal} />
        </main>
      </div>
    );
  }
}

export default App;
