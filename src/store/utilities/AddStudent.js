import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addStudent, addStudentThunk, getStudentsThunk } from '../store/utilities/reducers/studentReducer'

//Blank slate for adding a student
class AddStudent extends Component {
    constructor() {
        super()
        this.state = {
            selectedCampus: null
        }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event) 
    {
        const studentCampus = event.target.value;
        this.setState({
            ...state,
            selectedCampus: studentCampus
        })
    }

    async handleSubmit(event) 
    {
        //We prevent from submitting first
        event.preventDefault();
        const studentFirstName = event.target.firstName.value;
        const studentLastName = event.target.lastName.value;
        const studentEmail = event.target.email.value;
        const studentGPA = event.target.gpa.value;
        const newStudentWithoutCampus = {
            firstName: studentFirstName,
            lastName: studentLastName,
            email: studentEmail,
            gpa: studentGPA,
        }
        const newStudentWithCampus = {
            firstName: studentFirstName,
            lastName: studentLastName,
            email: studentEmail,
            gpa: studentGPA,
            campusId: this.state.selectedCampus
        }
        //If null then nothing is selected
        if (this.state.selectedCampus !== null) 
        {
            this.props.writeStudent(newStudentWithCampus)
        } 
        else {
            this.props.writeStudent(newStudentWithoutCampus)
        }
        this.props.history.push('/students')

    }

    render() {
        /*
        The DOM Label htmlFor Property is used to set or return the value of 
        the for attribute of a <label> element. The For attribute defines which 
        form element will be labeled.
        */
        const campusList = this.props.campuses.campuses;
        console.log(campusList);
        return (
            <div>
                <h1>ADD STUDENT</h1>
                <form action="POST" onSubmit={this.handleSubmit}>
                    <div>
                        <label htmlFor="firstName">First Name</label>
                        <input type="text" name="firstName"></input>
                    </div>
                    <div>
                        <label htmlFor="lastName">Last Name</label>
                        <input type="text" name="lastName"></input>
                    </div>
                    <div>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email"></input>
                    </div>
                    <div>
                        <label htmlFor="gpa">GPA</label>
                        <input type="text" name="gpa"></input>
                    </div>
                    <div>
                        <p>Campus</p>
                        <select onClick={this.handleChange}>
                            <option>none</option>
                            {campusList.map(campus =>
                                <option name="campusId" value={campus.id}>{campus.name}</option>
                            )}
                        </select>
                    </div>
                    <input type="submit" name="submit" value="add student"></input>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => 
{
    return {
        campuses: state.campuses
    }
}

const mapDispatchToProps = (dispatch, ownProps) => 
{
    return {
        writeStudent: async (student) => dispatch(addStudentThunk(student))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(AddStudent);