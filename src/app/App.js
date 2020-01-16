/* eslint-disable-all */
import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Link} from 'react-router-dom';

import AddCampus from '../components/containers/AddCampus';
import AllCampuses from '../components/containers/allCampuses';
import AllStudents from '../components/containers/allStudents';
import AddStudent from '../components/containers/AddStudent';
import EditStudent from '../components/containers/EditStudent';
import EditCampus from '../components/containers/EditCampus';

import SingleStudent from '../components/views/singleStudent';
import SingleCampus from '../components/views/singleCampus';
import Home from '../components/views/Home';



class App extends Component{
    constructor() {
	super();

	// this.state = {
	//     allStudents: [],
	//     allCampuses: [],
	//     singleStudent: {
	// 	firstName: '',
	// 	lastName: '',
	// 	email:'',
	// 	imageURL: '',
	// 	gpa: 0
	//     },
	//     singleCampus: {
	// 	name: '',
	// 	numStudents: 0,
	// 	imageURL: '',
	// 	address: '',
	// 	description: ''
	//     }
	}
    
    
    render() {
	const HomeComponent = () => (<Home/>);
	const AllCampusesComponent = () => (<AllCampuses/>);
	const AllStudentsComponent = () => (<AllStudents/>);
	//const singleStudentComponent = () => (<SingleStudent/>);
	//const singleCampusComponent = () => (<SingleCampus/>);
	const addCampusComponent = () => (<AddCampus/>);
	const addStudentComponent = () => (<AddStudent />);
	const editStudentComponent = () => (<EditStudent />);
	const editCampusComponent = () => (<EditCampus />);

	//WE NEED TO PASS THE OBJECT OF A CAMPUS OR STUDENT TO THE SINGLES PAGE
	//(ASK BILLY)
	return (
		<Router>
		<Switch>
		<Route exact path="/" render={HomeComponent}/>
		<Route exact path="/AllCampuses" render={AllCampusesComponent}/>
		<Route exact path="/AllStudents" render={AllStudentsComponent}/>

	    {this.props.campuses.map( (campus) => {
		return <Route exact path={`/AllCampuses/:campusId`} render={ (props) => <SingleCampus {...props} campus={campus.id} />}/>})}

	    {this.props.allStudents.map( (student) => {
	    return <Route exact path={`/AllStudents/:studentId`} render={ (props) => <SingleStudent {...props} student={student.id} />} />})}
	    
		<Route exact path="/AddCampus/" render={addCampusComponent} />
		<Route exact path="/AddStudent/" render={addStudentComponent} />
		<Route exact path="/EditStudent/" render={editStudentComponent} />
		<Route exact path="/EditCampus/" render={editCampusComponent} />
		</Switch>
		</Router>
	);
    }
}

function mapState(state) {
    return {
	allStudents: state.students,
	campuses: state.campuses
    };
}

//anything in this function will be accessible on the component's props object;
//in other words, you can now call this.props.incrementCoutner;
function mapDispatch(dispatch) {
    return {
	
    }
}

export default connect(mapState, null)(App);
