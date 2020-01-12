import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Show Campus with No Students set
class singleCampus extends Component {
    constructor(props) {
        super(props);
    }

componentDidMount()
{
    this.props.fetchCampus()
}

    render() {
        const campusId = this.props.campuses.selectedCampus.id
        const studentList = this.props.students.students
        const filteredStudents = studentList.filter(student => student.campusId == campusId)
        const campus = this.props.campuses.selectedCampus
        console.log(filteredStudents)
        //Replace a href with react router
        return (
            <div>
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
                                <li><a href={`http://localhost:1337/#/students/${student.id}`}>{student.firstName} {student.lastName}</a></li>
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


export default  singleCampus;