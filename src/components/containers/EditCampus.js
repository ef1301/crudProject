import React, { Component } from 'react'
import { connect } from 'react-redux'
import { editCampusThunk } from '../../store/utilities/campusReducer'
import { Link } from "react-router-dom";


class EditCampusForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
	    id: Number(this.props.match.params.campusId),
            name: '',
            imageUrl: '',
            address: '',
            description: ''
        };
    }
    componentDidMount() {
	//console.log('id', this.state);
	this.fetchCurrentCampus();
    }

    fetchCurrentCampus = () => {
	console.log(this.state.id);
	for(let campus of this.props.campuses){
	    if(campus.id === this.state.id) {
		this.setState({name: campus.name,
			       imageUrl: campus.imageUrl,
			       address: campus.address,
			       description: campus.description
			      });
		break;
	    }

	}
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
	//console.log(this.props.campus.id);
	//console.log(this.state);
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
                </div>
                </div>
                </div>

                <div className="container">
                <form onSubmit={this.handleSubmit}>
                <h2> Edit Campus</h2>

                <label htmlFor="name">Name: </label>
                <input name="name" required type="text" value={this.state.name} onChange={this.handleChange}></input><br />

                <label htmlFor="imageUrl">ImageURL:</label>
                <input name="imageUrl" type="text" value={this.state.imageUrl} onChange={this.handleChange}></input><br />

                <label htmlFor="address">Address:</label>
                <input name="address" required type="text" value={this.state.address} onChange={this.handleChange}></input><br />

                <label htmlFor="description">Description:</label><br />
                <input name="description" type="text" value={this.state.description} required onChange={this.handleChange}></input><br />

                <button>Submit Changes</button>
                </form>
                </div>
		</div>
        )
    }
}

const mapStateToProps = state => {
    return {
	campuses: state.campuses
    };
};

// async -> Promise based, expects a result in the future
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        editCampus: (campus) => dispatch(editCampusThunk(campus))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(EditCampusForm);
