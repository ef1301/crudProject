import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampusThunk, currentCampusThunk, editCampusThunk } from '../../store/utilities/campusReducer'
import { Link } from "react-router-dom";


class EditCampusForm extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            imageURL: '',
            address: '',
            description: '',
        };

    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.addCampus(this.state);
    

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

                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <h2> Edit Campus</h2>
                        <label htmlFor="id">ID: </label>
                        <input name="id" required type="number" placeholder="Enter Campus ID." onChange={this.handleChange}></input><br />

                        <label htmlFor="name">Name: </label>
                        <input name="name" required type="text" placeholder="Enter Campus Name." onChange={this.handleChange}></input><br />

                        <label htmlFor="imageURL">ImageURL:</label>
                        <input name="imageURL" type="text" placeholder="Enter Campus ImageURL." onChange={this.handleChange}></input><br />

                        <label htmlFor="address">Address:</label>
                        <input name="address" required type="text" placeholder="Enter Campus Address." onChange={this.handleChange}></input><br />

                        <label htmlFor="description">Description:</label><br />
                        <textarea name="description" required name="description" rows="4" cols="50" onChange={this.handleChange}></textarea><br />

                        <button>Submit Changes</button>
                    </form>
                </div>
            </div>
        )
    }
}
// async -> Promise based, expects a result in the future
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editCampus: (campus) => dispatch(editCampusThunk(campus)),
        fetchSingleCampus: (id) => dispatch(currentCampusThunk(id))
    }
}


export default connect(null, mapDispatchToProps)(EditCampusForm);
