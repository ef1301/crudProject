
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampusThunk } from '../utilities/reducers/campusReducer'
import { Link } from "react-router-dom";

class AddCampus extends Component 
{
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit(event) 
    {
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
                </div>
                <form onSubmit={this.handleSubmit}>
                    <h1>ADD CAMPUS</h1>
                    <label htmlFor="id">ID:</label>
                    <input name="id" type="number" onChange={this.handleChange}></input>
                    <label htmlFor="name">Name:</label>
                    <input name="name" type="text" onChange={this.handleChange}></input>
                    <button>Add Student</button>
                </form>
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