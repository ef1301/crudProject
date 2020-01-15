import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AllCampusesView from '../views/AllCampusesView';
import { fetchCampusesThunk, removeCampusThunk } from '../../thunks';
import { connect } from "react-redux";

class AllCampuses extends Component {
  constructor(props) {
      super(props);
      /*this.state = {
	  name: '',
	  imageURL: '',
	  address: '',
	  description: ''
      };*/

  }
  componentDidMount() {
    	this.props.fetchCampuses();
  }

    handleRemoveCampus = (id) => {
	this.props.removeCampus(id);
    }

  display() {
    console.log(this.props);
    if (this.props.campuses.length == 0) {
      return (
        <div className='container'>
          <h2>All Campuses</h2>
          <p>There are no campuses registered in the database.</p><br/>
          <div  className="add-card">
          <Link to="/AddCampus">Add Campus</Link>
              </div>
        </div>
      );
    } 
    else 
    {
        return (
	        <div className='all-card-holder'>
		<div  className="add-card">
		<Link to="/AddCampus">Add Campus</Link>
		</div>

		<AllCampusesView campuses={this.props.campuses} handleRemoveCampus={this.handleRemoveCampus}/>
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
  console.log(state);
  return {
    campuses: state.campuses
  }
}

function mapDispatch(dispatch) {
    return {
	fetchCampuses: () => dispatch(fetchCampusesThunk()),
	removeCampus: (id) => dispatch(removeCampusThunk(id))
    };
}

export default connect(mapState, mapDispatch)(AllCampuses);
