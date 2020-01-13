import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AllCampuses extends Component {
    constructor(props){
	super(props);
    }
    render(){
	return (
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
	);
    }
}

export default AllCampuses;
