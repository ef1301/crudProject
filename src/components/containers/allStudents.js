import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import AllStudentsView from '../views/allStudentsView';
import { fetchStudentsThunk, removeStudentThunk, currentStudentThunk } from '../../thunks';

class AllStudents extends Component {
    componentDidMount() {
	this.props.fetchStudents();
    }

    handleRemoveStudent = (id) => {
	this.props.removeStudent(id);
	}	
	


    display = () => {
	// console.log(this.props.students);
	if(this.props.allStudents.length === 0){
	    return (
		    <div className='container'>
		    <h2>All Students</h2>
		    <p>There are no students registered in the database.</p><br/>
		    <div  className="add">
		    <Link to="/AddStudent">Add Student</Link>
		    </div>
		    </div>
	    );
	}
	else {
	    return (
		    <div className='all-card-holder'>
		    <div className="add-card">
		    <Link to="/AddStudent">Add Student</Link>
		    </div>
		    <AllStudentsView fetchCurrentStudent = {this.props.fetchCurrentStudent} allStudents={this.props.allStudents} handleRemoveStudent={this.handleRemoveStudent}/>
		    </div>
	    );
	}
    }
    
    render(){
	return (
		<div>
	    	<div className="home-container">
	    	<div className="header">
		<h1>All Students</h1>
		
		<div className="navbar">
		<Link to="/">Home</Link>
		<Link to="/AllCampuses">Campuses</Link>
		<Link to="/AllStudents">Students</Link>
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
	allStudents: state.students
    }
}

function mapDispatch(dispatch) {
    return {
	fetchStudents: () => dispatch(fetchStudentsThunk()),
	removeStudent: (id) => dispatch(removeStudentThunk(id)),
	fetchCurrentStudent: (id) => dispatch(currentStudentThunk(id))
    }
}

export default connect(mapState, mapDispatch)(AllStudents);

