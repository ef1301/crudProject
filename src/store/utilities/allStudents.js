import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

class allStudents extends Component {
    constructor(props){
	super(props);
    }
    componentDidMount()[
	//function that fetches all students
    }
    render(){
	return(
	    	<div className="header">
		<h1>All Students Registered</h1>
		<div className="navbar">
		<Link to="/">Home</Link>
		<Link to="/allCampuses">Campuses</Link>
		<Link to="/Student">Student</Link>
		<Link to="/Campus">Campus</Link>
		</div>
		</div>
	);
    }
};

const mapStateToProps = (state) => {
    return {
	
    };
}
const mapDispatchToProps = (state) => {
    return {
	//function that fetches all students
	//fetchAllStudents: () => dispatch(thunk function)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(allStudents);
