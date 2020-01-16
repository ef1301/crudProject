import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { currentStudentThunk  } from '../../thunks';

class SingleStudent extends Component {
    componentDidMount() 
    {
        this.props.fetchCurrentStudent(Number(this.props.match.params.studentId));
        console.log("mount",Number(this.props.match.params.studentId));
    }
    
    render() {
        console.log(this.props);

        return (
		<div>
		
		<div className="home-container">
	    	<div className="header">
		<h1>Student</h1>
		
		<div className="navbar">
		<Link to="/">Home</Link>
		<Link to="/AllCampuses">Campuses</Link>
		<Link to="/AllStudents">Students</Link>
		</div>
		</div>	
		</div>

	    {(this.props.student !== undefined) ? 
             <div>
             <h2>{this.props.student.name}</h2>
             <img src={this.props.student.imageURL} alt="student"/>
             </div> : <div>hello</div> } 

	    
	    </div>
        )
    }
}


/*

With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:

    By default, a connected component receives props.dispatch and can dispatch actions itself.
    connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.


*/

const mapStateToProps = state => { 
    return {
        student: state.allStudents
    };
}
const mapDispatchToProps = (dispatch) => 
{
    return {
        fetchCurrentStudent: (id) => dispatch(currentStudentThunk(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
