import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AddCampus from './AddCampus'

class AllCampuses extends Component {
  constructor(props) {
    super(props);
  }

  

  display() {
    console.log(this.props.allCampuses);
    if (this.props.allCampuses == undefined) {
      return (
        <div className="container">
          <h2>All Campuses</h2>
          <p>There are no campuses registered in the database.</p>
          <Link to="/AddCampus">Add Campus</Link>
        </div>
      );
    } 
    else 
    {
      let items = this.props.allCampuses.map(element => {
        return (
          <div key={element} className="container">
            <h1>All Campuses</h1>
            <img src={element.imageURL} alt="" />
            <br />
            Name: {element.name}
            <br />
            {element.numStudents} students
            <br />
            <button onclick={this.edit}>Edit</button>
            <button>Delete</button>
          </div>
        );
      });
      return items;
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

export default AllCampuses;
