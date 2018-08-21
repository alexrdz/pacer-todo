import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slugify } from '../utils';
import AddGoalForm from './AddGoalForm';
import AppNav from './AppNav';

class GoalsList extends Component {
  state = {
    showForm: false
  };

  toggleForm = () => {
    return this.setState(() => ({showForm: !this.state.showForm}))
  }

  render() {
    const {goals, addGoal} = this.props;
    const {showForm} = this.state;
    
    const list = goals.map((goal, i) => (
      <li key={goal._id} className="border-bottom py-4">
        <div className="d-flex justify-content-between">
          <p className="h6 border-bottom my-3 border-thick">0{i+1}</p>
          <a href="#" className="p-3">
            <svg className="remove" width="16" height="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.797 8.158l3.582 3.583a2.217 2.217 0 0 1-3.135 3.134l-3.582-3.582-3.688 3.688a2.217 2.217 0 1 1-3.135-3.135l3.688-3.688L.944 4.575A2.217 2.217 0 1 1 4.08 1.44l3.583 3.583 3.477-3.477a2.217 2.217 0 0 1 3.135 3.135l-3.477 3.477z" fillRule="evenodd"/></svg>
          </a>
        </div>
        <Link to={slugify(goal.name)} className="d-block">
        {goal.name}
        </Link>
      </li>
    ));
    
    return (
      <div>
        <AppNav toggleForm={this.toggleForm} />
        <div className="col col-md-8 mx-auto">
          <AddGoalForm addGoal={addGoal} showForm={showForm} />
          <ul className="list-unstyled">
            {list}
          </ul>
        </div>
      </div>
    );
  }
}

GoalsList.propTypes = {
  goals: PropTypes.array.isRequired
}

export default GoalsList;