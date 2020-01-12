/* eslint-disable-all */
import React, {Component} from 'react';
import './App.css';
//import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import allCampuses from './store/utilities/allCampuses';

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
	const allCampusesComponent = () => (<allCampuses/>);
	return (
		<div className="App">
		<div id="navbar">
		</div>
		<Router>
		<Route exact path="/" render={allCampusesComponent}/>
		<Route exact path="/allCampuses" render={allCampusesComponent}/>
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
