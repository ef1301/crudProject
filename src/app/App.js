/* eslint-disable-all */
import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import {  } from '../components/containers';


import SingleStudent from './store/utilities/singleStudent';
import SingleCampus from './store/utilities/singleCampus';
import Home from './store/utilities/Home';
import AllCampuses from './store/utilities/allCampuses';
import AllStudents from './store/utilities/allStudents';
import AddCampus from './store/utilities/AddCampus';
import AddStudent from './store/utilities/AddStudent';

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
	const HomeComponent = () => (<Home/>);
	const AllCampusesComponent = () => (<AllCampuses/>);
	const AllStudentsComponent = () => (<AllStudents/>);
	const singleStudentComponent = () => (<SingleStudent/>);
	const singleCampusComponent = () => (<SingleCampus/>);
	const addCampusComponent = () => (<AddCampus/>);
	const addStudentComponent = () => (<AddStudent />);

	return (
		<Router>
		<Switch>
		<Route exact path="/" render={HomeComponent}/>
		<Route exact path="/AllCampuses" render={AllCampusesComponent}/>
		<Route exact path="/AllStudents" render={AllStudentsComponent}/>
		<Route exact path="/Student/" render={singleStudentComponent}/>
		<Route exact path="/Campus/" render={singleCampusComponent}/>
		<Route exact path="/AddCampus/" render={addCampusComponent} />
		<Route exact path="/AddStudent/" render={addStudentComponent} />
		</Switch>
		</Router>
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
