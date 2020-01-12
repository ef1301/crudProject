import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
	return(
		<div className="home-container">
		
	    	<div className="header">
		<h1>All Schools</h1>
		<div className="navbar">
		<Link to="/">Home</Link>
		<Link to="/allCampuses">Campuses</Link>
		<Link to="/Student">Student</Link>
		<Link to="/Campus">Campus</Link>
		</div>
		</div>
		
		<img src="https://www.arizona.edu/sites/default/files/student-life-campus-hero.jpg?itok=aX-0GgvT&timestamp=1553883754"/>

	    </div>
	);
    }
}

export default Home;