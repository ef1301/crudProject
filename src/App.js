import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

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
		gpa: 0,
	    }
	    singleCampus: {
		name: '',
		imageURL: '',
		address: '',
		description: ''
	    }
	}
    }
    
    render() {
	return (
		<div className="App">
	  
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
