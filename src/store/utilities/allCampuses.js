import React, { Component } from 'react';

class allCampuses extends Component {
    constructor(props){
	super(props);
    }

    deleteCampus = () => {
	for(let i=0; i < this.props.allCampuses.length; i++){
	    if(this.props.name == this.props.allCampuses[i].name){
		this.props.allCampuses.splice(i,1);
	    }
	}
    }
    
    display() {
	if(this.props.allCampuses.length == 0){
	    return (
		    <div className="container">
		    <h1>All Campuses</h1>
		    <p>There are no campuses registered in the database</p>
		    <button>Add Campus</button>
		</div>
	    );
	}
	else {
	    let items = this.props.allCampuses.map( (element) => {
		return (
			<div key={element} className="container">
			<h1>All Campuses</h1>
			<img src={element.imageURL}<br/>
			Name: {element.name}<br/>
			{element.numStudents} students<br/>
			<button onclick={this.edit}>Edit</button>
			<button>Delete</button>
			</div>
		);
	    });
	    return items;
	}
    }

    render(){
	return (
	    {this.display()}
	);
    }
}

export default allCampuses;
