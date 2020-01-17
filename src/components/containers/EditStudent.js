import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editStudentThunk } from '../../store/utilities/studentReducer'
import { Link } from "react-router-dom";

class EditStudentForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Number(this.props.match.params.studentId),
            name: "",
            email: "",
            imageURL: "",
            gpa: 0
        };
    }
    componentDidMount() {
	this.fetchCurrentStudent();
    }

    fetchCurrentStudent = () => {
	console.log(this.props);
	/*for(let student of this.props.allStudents){
	    if(student.id === this.state.id) {
		this.setState({name: student.name,
			       email: student.email,
			       imageURL: student.URL,
			       gpa: student.gpa
			      });
		break;
	    }
	}*/

	const student = this.props.allStudents.find(s => s.id === this.state.id);
	this.setState(student);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
	event.preventDefault();
	this.props.editStudent(this.state);
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
                </div>
                </div>
                </div>

                <div className="container">
                <form onSubmit={this.handleSubmit}>
                <h2>Edit Student</h2>

                <label htmlFor="name">Name: </label>
                <input required value={this.state.name} name="name" type="text" onChange={this.handleChange}></input><br />

                <label htmlFor="email">Email: </label>
                <input required value={this.state.email} name="email" type="email" onChange={this.handleChange}></input><br />

                <label htmlFor="imageURL">ImageURL: </label>
                <input value={this.state.imageUrl} name="imageURL" type="text" onChange={this.handleChange}></input><br />

                <label htmlFor="gpa">GPA: </label>
                <input required value={this.state.gpa} name="gpa" type="number" step="0.01" min="0.0" max="4.0" onChange={this.handleChange}></input><br />

                <button>Submit Changes</button>
                </form>
                </div>

            </div>
        )
    }
}

// Declaration for mapStateToProps;
// The keys in this returned object will be on your component's `props` object;
// The values of these keys reflect the value of the piece of state in your Redux store;
const mapState = (state) => {
    return {
        allStudents: state.students,
    }
}

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
    return {
        editStudent: (student) => dispatch(editStudentThunk(student))
    }
}

export default connect(mapState, mapDispatch)(EditStudentForm);





