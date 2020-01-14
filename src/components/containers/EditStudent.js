import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudentThunk, singleStudentThunk } from '../../store/utilities/studentReducer'
import { Link } from "react-router-dom";


// This might be more appropriate as a file in another directory titled "forms";
// Not all components benefit from being separated out into Smart Containers and Presentational Components;
// Forms are a good example of something that can live in one sole component like so;

class EditStudentForm extends Component {
    constructor() {
        super();
        this.state = {
            id: 0,
            name: "",
	    email: "",
	    imageURL: "",
	    gpa: 0
        }
    }

    //Implement Remove by first removing student then adding them back in

    handleChange = (event) => 
    {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state.name);
    }

    //Edit student then Add Student back
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.fetchStudent(this.state);
        this.props.addStudent(this.state);
    }

    render() {
        // normally, you will grab the id of the student not from an input form (the user would not know which id to pick) but from the URL bar through parameterized routing;
        // if you look at the redux logger in the console, you will see that any student you add will have an id with a value that is not an integer but a string (ignore this as this would be taken care of in a more realistic scenario);
        // it is also a minor point for this lesson;
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
		
		<div className="container">
		<form onSubmit={this.handleSubmit}>
		<h2>Edit Student</h2>
		
                <label htmlFor="id">ID: </label>
                <input required name="id" type="number" placeholder="Enter Student ID." onChange={this.handleChange}></input><br/>
		
                <label htmlFor="name">Name: </label>
                <input required placeholder="Enter First & Last Name" name="name" type="text" onChange={this.handleChange}></input><br/>
		
		<label htmlFor="email">Email: </label>
                <input required placeholder="Enter Email Address" name="email" type="email" onChange={this.handleChange}></input><br/>
		
		<label htmlFor="imageURL">ImageURL: </label>
                <input placeholder="Enter ImageURL" name="imageURL" type="text" onChange={this.handleChange}></input><br/>
		
		<label htmlFor="gpa">GPA: </label>
                <input required placeholder="Enter GPA" name="gpa" type="number" step="0.01" min="0.0" max="4.0" onChange={this.handleChange}></input><br/>

                <button>Add Student</button>
		</form>
		</div>

	    </div>
        )
    }
}




function mapDispatch(dispatch) {
    return {
        addStudent: (studentToAdd) => dispatch(addStudentThunk(studentToAdd)),
        fetchStudent: (studentToEdit) => dispatch(singleStudentThunk(studentToEdit))
    }
}

// if you do not need any slice of state from the redux store, you can pass in null in place of mapState;
export default connect(null, mapDispatch)(EditStudentForm);
