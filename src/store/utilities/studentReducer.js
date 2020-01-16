//Action Types to be dispatched later
const EDIT_STUDENT = "EDIT_STUDENT";
const FETCH_CURRENT_STUDENT = "FETCH_CURRENT_STUDENT";
const FETCH_STUDENTS = "FETCH_STUDENTS";
const ADD_STUDENT = "ADD_STUDENT";
const REMOVE_STUDENT = "REMOVE_STUDENT";



// THUNK CREATOR;
// Below we have dummyData
let arrayOfStudentsFromAPI = [
    {
        "id": 4,
        "name": "Jerry",
        "email": "jerryjingle@bells.com",
        "imageURL": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-06T19:58:21.314Z",
        "updatedAt": "2018-12-06T19:58:21.314Z",
        "campusId": 3
    },
    {
        "id": 6,
        "name": "Barry",
        "email": "someemailgoeshere@yahoo.com",
        "imageURL": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-06T20:04:04.275Z",
        "updatedAt": "2018-12-06T20:04:04.275Z",
        "campusId": 1
    },
    {
        "id": 1,
        "name": "justin",
        "email": "mintzer.justin@gmail.com",
        "imageURL": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": 4,
        "createdAt": "2018-12-05T23:02:45.257Z",
        "updatedAt": "2018-12-05T23:02:45.257Z",
        "campusId": 1
    },
    {
        "id": 24,
        "name": "first",
        "email": "email@email.com",
        "imageURL": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-10T04:50:33.677Z",
        "updatedAt": "2018-12-10T04:50:33.677Z",
        "campusId": null
    },
    {
        "id": 2,
        "name": "bob",
        "email": "bobbyboy1234@yahoo.com",
        "imageURL": "https://i.imgur.com/GuAB8OE.jpg",
        "gpa": 3.7,
        "createdAt": "2018-12-05T23:02:45.270Z",
        "updatedAt": "2019-06-14T00:15:35.429Z",
        "campusId": 1
    }
]

export let fetchStudentsThunk = () => (dispatch) => {
    dispatch(fetchStudents(arrayOfStudentsFromAPI))

}
//Middleware (Between Dispatch and Store)
export const removeStudentThunk = (id) => (dispatch) => {
    let resolvedActionObject = removeStudent(id);
    dispatch(resolvedActionObject);
}

export const addStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = addStudent(student);
    dispatch(resolvedActionObject);
}

export const currentStudentThunk = (id) => (dispatch) => {
    let resolvedActionObject = fetchCurrentStudent(id);
    dispatch(resolvedActionObject);
}

export const editStudentThunk = (student) => (dispatch) => {
    let resolvedActionObject = editStudent(student);
    dispatch(editStudent(student));
}


// ACTION CREATOR
function fetchStudents(students) {
    return {
        type: FETCH_STUDENTS,
        students
    }
}

function fetchCurrentStudent(id) {
    return {
	type: FETCH_CURRENT_STUDENT,
	id
    }
}

function removeStudent(id) {
    return {
        type: REMOVE_STUDENT,
        id
    }
}

function addStudent(student) {
    return {
        type: ADD_STUDENT,
        student
    }
}

function editStudent(student) {
    return {
        type: EDIT_STUDENT,
        student
    }
}



// REDUCER FUNCTION;
function allStudentsReducer(state = [], action) {
    switch (action.type) {
        case FETCH_STUDENTS:
            return action.students;
        case FETCH_CURRENT_STUDENT:
            return state.filter(student => student.id === action.id);
        case REMOVE_STUDENT:
            return state.filter(student => student.id !== action.id);
        case ADD_STUDENT:
            arrayOfStudentsFromAPI = [...arrayOfStudentsFromAPI, action.student]
            return [...state, action.student]
        case EDIT_STUDENT:
            return action.student;    
        default:
            return state;
    }
}

export default allStudentsReducer;
