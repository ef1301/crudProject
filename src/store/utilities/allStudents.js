import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class AllStudents extends Component {
    constructor(props){
	super(props);
    }

        display() {
	console.log(this.props.allCampuses);
	if(this.props.allStudents === undefined){
	    return (
		    <div className="container">
		    <h2>All Students</h2>
		    <p>There are no students registered in the database.</p>
		    <button>Add Student</button>
		    </div>
	    );
	}
	else {
	    let items = this.props.allCampuses.map( (element) => {
		return (
			<div key={element} className="container">
			<h1>All Students</h1>

			</div>
		);
	    });
	    return items;
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
		<Link to="/Student">Student</Link>
		<Link to="/Campus">Campus</Link>
		</div>
		
		</div>
		</div>
		{this.display()}
		</div>
	);
    }
}

export default AllStudents;
