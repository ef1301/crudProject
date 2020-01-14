import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import AllStudentsView from "../views/allStudentsView";
import { fetchStudentsThunk, removeStudentThunk } from "../../thunks";

class AllStudents extends Component {
  componentDidMount() {
    /*Incorrectly named as the actual thunk, when we map dispatchs, we renamed it
		this.props.fetchStudentsThunk();*/
    this.props.fetchStudents();
  }

  handleRemoveStudent = id => {
    this.props.removeStudent(id);
  };

  display() {
    if (this.props.allStudents === undefined) {
      return (
        <div className="container">
          <h2>All Students</h2>
          <p>There are no students registered in the database.</p>
          <div className="add">
            <Link to="/AddStudent">Add Student</Link>
          </div>
        </div>
      );
    } else {
      return (
        <div className="container">
          <AllStudentsView
            allStudents={this.props.allStudents}
            handleRemoveStudent={this.handleRemoveStudent}
          />
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <div className="home-container">
          <div className="header">
            <h1>All Students</h1>

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
    allStudents: state.allStudents
  };
}

function mapDispatch(dispatch) {
  return {
    fetchStudents: () => dispatch(fetchStudentsThunk()),
    removeStudent: id => dispatch(removeStudentThunk(id))
  };
}

export default connect(mapState, mapDispatch)(AllStudents);
