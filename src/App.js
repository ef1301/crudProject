/* eslint-disable-all */
import React, {Component} from 'react';
import './App.css';
//import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';
import allCampuses from './store/utilities/allCampuses';
import SingleStudent from './store/utilities/singleStudent';
import singleCampus from './store/utilities/singleCampus';
class App extends Component{
    constructor() {
	super();
	this.state = {
	    allStudents: [],
	    allCampuses: [],
	    singleStudent: {
		firstName: '',
		lastName: '',
		email:'',
		imageURL: '',
		gpa: 0
	    },
	    singleCampus: {
		name: '',
		numStudents: 0,
		imageURL: '',
		address: '',
		description: ''
	    }
	}
    }
    
    render() {
	const CampusesComponent = () => (<allCampuses/>);
	return (
		<div className="App">
		<div id="navbar">
		<Router>
		<Link to="/">Home</Link>
		<Link to="/allCampuses">Campuses</Link>
		<Link to="/Student">Student</Link>
		<Link to="/Campus">Campus</Link>
		</Router>
		</div>
		<Router>
		<Route exact path="/" render={CampusesComponent}/>
		<Route exact path="/Campuses" render={CampusesComponent}/>
		</Router>
	    </div>
		
	);
    }
}

function mapState(state) {
    return {
    };
}

//anything in this function will be accessible on the component's props object;
//in other words, you can now call this.props.incrementCoutner;
function mapDispatch(dispatch) {
    return {
    }
}

export default App;
