import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { singleCampusThunk } from "../../thunks/index";
//import { getSingleCampus } from "../utilities/reducers/campusReducer";
//Show Campus with No Students set
class SingleCampus extends Component {
    constructor(props) {
        super(props);
    }

componentDidMount()
{
    this.props.fetchCampus()
}

    render() 
    {
        const campusId = this.props.campuses.selectedCampus.id
        const studentList = this.props.students.students
        const filteredStudents = studentList.filter(student => student.campusId === campusId)
        const campus = this.props.campuses.selectedCampus
        console.log(filteredStudents)
        //Replace a href with react router
        return (
		<div>
	    	<div className="home-container">
	    	<div className="header">
		<h1>Campus</h1>
		<div className="navbar">
		<Link to="/">Home</Link>
		<Link to="/AllCampuses">Campuses</Link>
		<Link to="/Student">Student</Link>
		<Link to="/Campus">Campus</Link>
		</div>
	    </div>
		</div>
	    
                <div>
                    <h2>{campus.name}</h2>
                    <img src={campus.imageUrl} />
                </div>
                <div>
                    <h2>Students</h2>
                    <p>There are {filteredStudents.length} in this campus</p>
                    <ul>
                        {filteredStudents.map(student =>
                            <div>
                                <li><a href={`http://localhost:3000/#/students/${student.id}`}>{student.firstName} {student.lastName}</a></li>
                                <li>{student.email}</li>
                                <li>{student.gpa}</li>
                                <img src={student.imageUrl} />
                            </div>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = state => {
  return {
    campuses: state.campuses,
    students: state.students,
    selectedCampus: state.selectedCampus
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchCampus: () => dispatch(singleCampusThunk(ownProps.match.params.id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SingleCampus);
