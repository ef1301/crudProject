import React, { Component } from 'react'
import { connect } from 'react-redux'
import { fetchStudentsThunk, currentStudentThunk, editStudentThunk } from '../../store/utilities/studentReducer'
import { Link } from "react-router-dom";

class EditStudent extends Component {
    constructor(props) {
        super(props);

        //THIS IS DESTRUCTURING
        // const {firstName, lastName, gpa, imageUrl} = this.props.student;

        //but don't need to set equal, it can implicitly understand (see example below below)
        this.state = {
            id: 0,
            name: "",
            email: "",
            imageURL: "",
            gpa: 0
        }
    }
    componentDidMount() {
        console.log("hello", this.props);
        // this.props.fetchCurrentStudent(this.props.student);

        // const { id, name, email, imageUrl, gpa } = this.props.student;
        // this.setState(
        //     {
        //         id, 
        //         name, 
        //         email, 
        //         imageUrl, 
        //         gpa
        //     }
        //)
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }

    handleEdit = (event) => {
        event.preventDefault();
        const { id, name, email, imageUrl, gpa } = this.state;

        let newStudent = 
        {
             id, 
             name, 
             email, 
             imageUrl, 
             gpa
        }

        this.props.editStudent(newStudent);
        this.props.fetchCurrentStudent(newStudent);
        console.log(newStudent);
    }

    render() {
        // normally, you will grab the id of the student not from an input form (the user would not know which id to pick) but from the URL bar through parameterized routing;
        // if you look at the redux logger in the console, you will see that any student you add will have an id with a value that is not an integer but a string (ignore this as this would be taken care of in a more realistic scenario);
        // it is also a minor point for this lesson;
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
                    <form onSubmit={this.handleEdit}>
                        <h2>Edit Student</h2>

                        <label htmlFor="id">ID: </label>
                        <input required name="id" type="number" placeholder="Enter Student ID." onChange={this.handleChange}></input><br />

                        <label htmlFor="name">Name: </label>
                        <input required placeholder="Enter First & Last Name" name="name" type="text" onChange={this.handleChange}></input><br />

                        <label htmlFor="email">Email: </label>
                        <input required placeholder="Enter Email Address" name="email" type="email" onChange={this.handleChange}></input><br />

                        <label htmlFor="imageURL">ImageURL: </label>
                        <input placeholder="Enter ImageURL" name="imageURL" type="text" onChange={this.handleChange}></input><br />

                        <label htmlFor="gpa">GPA: </label>
                        <input required placeholder="Enter GPA" name="gpa" type="number" step="0.01" min="0.0" max="4.0" onChange={this.handleChange}></input><br />

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
        students: state.students,
        student: state.student
    }
}

// Declaration for mapDispatchToProps;
// The keys in this returned object will be on your component's `props` object as well;
// The values of these keys are anonymous functions that will dispatch imported action creators or thunks so that a component can communicate with the appropriate reducer function(s);
const mapDispatch = (dispatch) => {
    return {
        fetchStudents: () => dispatch(fetchStudentsThunk()),
        fetchCurrentStudent: (id) => dispatch(currentStudentThunk(id)),
        editStudent: (student) => dispatch(editStudentThunk(student))
    }
}

export default connect(mapState, mapDispatch)(EditStudent);





