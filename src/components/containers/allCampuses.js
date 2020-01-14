import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AllCampusesView from '../views/AllCampusesView';
import { fetchCampusesThunk, removeCampusThunk } from '../../thunks';

class AllCampuses extends Component {
  constructor(props) {
    super(props);
  }
    componentDidMount() {
	this.props.fetchCampuses();
    }

    handleRemoveCampus = (id) => {
	this.props.removeCampus(id);
    }

  display() {
    console.log(this.props.allCampuses);
    if (this.props.allCampuses == undefined) {
      return (
        <div className="container">
          <h2>All Campuses</h2>
          <p>There are no campuses registered in the database.</p>
          <div  className="add">
          <Link to="/AddCampus">Add Campus</Link>
              </div>
	  
        </div>
      );
    } 
    else 
    {
        return (
		<div className="container">
		<AllCampusesView allCampuses={this.props}/>
            </div>
        );
    }
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <div className="header">
            <h1>All Campuses</h1>

            <div className="navbar">
              <Link to="/">Home</Link>
              <Link to="/AllCampuses">Campuses</Link>
              <Link to="/AllStudents">Students</Link>
              <Link to="/Student">Student</Link>
              <Link to="/Campus">Campus</Link>
            </div>
          </div>
        </div>
        {this.display()}
      </div>
    );
  }
}

function mapState(state) {
    return {
	allCampuses: state.allCampuses
    }
}

function mapDispatch(dispatch) {
    return {
	fetchCampuses: () => dispatch(fetchCampusesThunk()),
	removeCampus: (id) => dispatch(removeCampusThunk(id))
    };
}

export default AllCampuses;
