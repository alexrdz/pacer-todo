import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { slugify } from '../utils';

class GoalsList extends Component {
  render() {
    const {goals} = this.props;
    
    const list = goals.map(goal => (
      <li key={goal._id}>
        <Link to={slugify(goal.name)} params={{ name: goal.name}}>
        {goal.name}
        </Link>
      </li>
    ));
    
    return (
      <ul>
        {list}
      </ul>
    );
  }
}

GoalsList.propTypes = {
  goals: PropTypes.array.isRequired
}

export default GoalsList;