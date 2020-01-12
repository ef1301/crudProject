import React, { Component } from 'react'
import { connect } from 'react-redux'
import { singleStudentThunk } from './reducers/studentReducer'
import { getSingleStudent } from './reducers/studentReducer'


class SingleStudent extends Component {
    componentDidMount() 
    {
        this.props.fetchStudent()
    }
    render() {
        const chosenStudent = this.props.students.selectedStudent
        const chosenCampusId = Number(chosenStudent.campusId)
        const chosenCampus = this.props.campuses.campuses.filter(campus => campus.id === chosenCampusId)
        return (
            <div>
                <h2>{chosenStudent.firstName} {chosenStudent.lastName}</h2>
                <ul>
                    <li>Campus: {chosenCampus.map(elem => elem.name)}</li>
                    <li>Email: {chosenStudent.email}</li>
                    <li>GPA: {chosenStudent.gpa}</li>
                    <img src={chosenStudent.imageUrl} />
                </ul>
            </div>
        )
    }
}


/*

With React Redux, your components never access the store directly - connect does it for you. React Redux gives you two ways to let components dispatch actions:

    By default, a connected component receives props.dispatch and can dispatch actions itself.
    connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.


*/

const mapStateToProps = (state) => {
    return {
        campuses: state.campuses,
        students: state.students,
        selectedStudent: state.selectedStudent,
        selectedCampus: state.selectedCampus
    }
}
const mapDispatchToProps = (dispatch, ownProps) => 
{
    return {
        fetchStudent: () => dispatch(singleStudentThunk(ownProps.match.params.id))
    }
}

/*
    As the second argument passed in to connect, mapDispatchToProps is used for
    dispatching actions to the store. dispatch is a function of the Redux store.
    You call store.dispatch to dispatch an action. This is the only way to trigger
    a state change.
*/

export default connect(mapStateToProps, mapDispatchToProps)(SingleStudent);
