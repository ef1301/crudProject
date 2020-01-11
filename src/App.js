import React, {Component} from 'react';
import './App.css';
import {connect} from 'react-redux';

class App extends Component{
    constructor() {
	super();
	this.state = {
	    allStudents: [],
	    
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
	currentCount: state.counterReducer
    };
}

//anything in this function will be accessible on the component's props object;
//in other words, you can now call this.props.incrementCoutner;
function mapDispatch(dispatch) {
    return {
	incrementCounter: () => dispatch(increment())
    }
}

export default App;
