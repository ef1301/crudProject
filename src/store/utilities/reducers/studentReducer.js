import axios from 'axios';

const GET_STUDENTS = 'GET_STUDENTS';
const GET_SINGLE_STUDENT = 'GET_SINGLE_STUDENT';
const ADD_STUDENT = 'ADD_STUDENT';
const REMOVE_STUDENT = 'REMOVE_STUDENT';

const getStudents = (students) => ({
    type: GET_STUDENTS,
    students
})


const getSingleStudent = (selectedStudent) => ({
    type: GET_SINGLE_STUDENT,
    selectedStudent
})

const addStudent = (student) => ({
    type: ADD_STUDENT,
    student
})

const removeStudent = (id) => ({
    type: REMOVE_STUDENT,
    id
})

//Action fires off a dispatch, causing a change to the store
const getStudentsThunk = () => {
    return (dispatch) => {
        axios.get('/api/students')
            .then(response => response.data)
            .then(students => dispatch(getStudents(students)))
            .catch(console.err)
    }
}

const singleStudentThunk = (studentId) => {
    console.log('singleStudent')
    return async (dispatch) => {
        await axios.get(`/api/students/${studentId}`)
            .then(response => response.data)
            .then(selectedStudent => dispatch(getSingleStudent(selectedStudent)))
            .catch(console.err)
    }
}

const addStudentThunk = (student) => {
    return async (dispatch) => {
        axios.post('/api/students', student)
            .then(res => res.data)
            .then(newStudent => {
                dispatch(addStudent(newStudent))
            })
    }
}

const removeStudentThunk = (id) => 
{
    return (dispatch) => {
        return axios.delete(`/api/students/${id}`)
            .then(dispatch(removeStudent(id)))
            .catch(console.err)
    }
}

//***********REDUCER FUNCTIONS ***************/
const initialState = {
    students: [],
    selectedStudent: []
}

/*********...Syntax explained ***************/

/*
    {...this.props} spreads out the "own" enumerable properties in props as discrete properties 
    on the Modal element you're creating. For instance, if this.props contained a: 1 and b: 2, 
    then

    <Modal {...this.props} title='Modal heading' animation={false}>

    would be the same as

    <Modal a={this.props.a} b={this.props.b} title='Modal heading' animation={false}>
*/

const studentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_STUDENTS:
            return { ...state, students: action.students }
        case GET_SINGLE_STUDENT:
            return { ...state, selectedStudent: action.selectedStudent }
        case ADD_STUDENT:
            return { ...state, students: [...state.students, action.student] }
        case REMOVE_STUDENT:
            return { ...state, students: state.students.filter(student => student.id !== action.id) }
        default:
            return state
    }
}

export { studentReducer, getStudents, getSingleStudent, addStudentThunk, singleStudentThunk, getStudentsThunk, removeStudentThunk };
