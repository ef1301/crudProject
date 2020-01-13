
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampusThunk } from '../utilities/reducers/campusReducer'
import { Link } from "react-router-dom";

class AddCampus extends Component 
{
    constructor() {
        super();
	this.state = {
	    name: '',
	    imageURL: '',
	    address: '',
	    description: ''
	};

    }

    handleChange = (event) => {
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        const campusName = event.target.name.value;
        const campusAddress = event.target.address.value;
        const newCampus = 
        {
            name: campusName,
            address: campusAddress
        }
        console.log(newCampus);
        this.props.writeCampus(newCampus)
        this.props.history.push('/campuses')

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
                <h2>Add Campus</h2>
                <label htmlFor="id">ID: </label>
                <input name="id" required type="number" placeholder="Enter Campus ID." onChange={this.handleChange}></input><br/>
		
                <label htmlFor="name">Name: </label>
                <input name="name" required type="text" placeholder="Enter Campus Name." onChange={this.handleChange}></input><br/>
		
		<label htmlFor="imageURL">ImageURL:</label>
                <input name="imageURL" type="text" placeholder="Enter Campus ImageURL." onChange={this.handleChange}></input><br/>
		
		<label htmlFor="address">Address:</label>
                <input name="address" required type="text" placeholder="Enter Campus Address." onChange={this.handleChange}></input><br/>
		
		<label htmlFor="description">Description:</label><br/>
                <textarea required name="description" rows="4" cols="50" onChange={this.handleChange}></textarea><br/>
		
                <button>Add Campus</button>
                </form>
		</div>
            </div>
        )
    }
}
// async -> Promise based, expects a result in the future
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        writeCampus: async (campus) => dispatch(addCampusThunk(campus)),
    }
}


export default connect(null, mapDispatchToProps)(AddCampus);
