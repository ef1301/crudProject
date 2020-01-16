import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom';
import { currentStudentThunk  } from '../../thunks';

class SingleStudent extends Component {
    componentDidMount() 
    {
        this.props.fetchCurrentStudent(Number(this.props.match.params.studentId));
        console.log("mount",this.props);
    }
    
    render() {
        console.log(this.props.students);

        return <div>
		
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

        <img class="single-student img" src={this.props.students.imageURL} alt="student" />
            {(this.props.students !== undefined) ? 
        <div class="student_header_container">
                    <h3>Student:{this.props.students.name}</h3>
        
            <p id="gpa">GPA:  {this.props.students.gpa}</p>
            </div> : <div>hello</div>}

        <div id="fixed-button">        
            <button>Edit</button>
            <button>Delete</button>
        </div>

 

	    
	    </div>
        
    }
}


/*

With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:

    By default, a connected component receives props.dispatch and can dispatch actions itself.
    connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.


*/

const mapStateToProps = state => { 
    return {
        students: state.students[0]
    };
}
const mapDispatchToProps = (dispatch) => 
{
    return {
        fetchCurrentStudent: (id) => dispatch(currentStudentThunk(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
