import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addCampusThunk, currentCampusThunk, editCampusThunk } from '../../store/utilities/campusReducer'
import { Link } from "react-router-dom";


class EditCampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
	    id: Number(this.props.match.params.campusId),
            name: '',
            imageUrl: '',
            address: '',
            description: '',
        };
    }
    componentDidMount() {
	console.log('id', this.state);
	this.props.fetchCurrentCampus(Number(this.props.match.params.campusId));
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
	console.log(this.props.campus.id);
	console.log(this.state);
        event.preventDefault();
        this.props.editCampus(this.state);
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

                        <label htmlFor="name">Name: </label>
                        <input name="name" required type="text" placeholder="Enter Campus Name." onChange={this.handleChange}></input><br />

                        <label htmlFor="imageUrl">ImageURL:</label>
                        <input name="imageUrl" type="text" placeholder="Enter Campus ImageURL." onChange={this.handleChange}></input><br />

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

const mapStateToProps = state => {
    return {
	campus: state.campuses[0]
  };
};

// async -> Promise based, expects a result in the future
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
	fetchCurrentCampus: (id) => dispatch(currentCampusThunk(id)),
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCampusForm);
