import axios from 'axios';

const GET_CAMPUSES = 'GET_CAMPUSES';
const GET_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

const getCampuses = (campuses) => ({
    type:GET_CAMPUSES,
    campuses
})

const getSingleCampus = (selectedCampus) => ({
    type:GET_SINGLE_CAMPUS,
    selectedCampus
})

const addCampus = (campus) => ({
    type:ADD_CAMPUS,
    campus
})

const removeCampus = (id) => ({
    type:REMOVE_CAMPUS,
    id
})


export const fetchStudentsThunk = () => (dispatch) => {
    const arrayOfStudentsFromAPI = [
        {
        "id": 4,
        "firstName": "Jerry",
        "lastName": "Jingle",
        "email": "jerryjingle@bells.com",
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-06T19:58:21.314Z",
        "updatedAt": "2018-12-06T19:58:21.314Z",
        "campusId": 3
        },
        {
        "id": 6,
        "firstName": "Barry",
        "lastName": "Huang",
        "email": "someemailgoeshere@yahoo.com",
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-06T20:04:04.275Z",
        "updatedAt": "2018-12-06T20:04:04.275Z",
        "campusId": 1
        },
        {
        "id": 1,
        "firstName": "justin",
        "lastName": "mintzer",
        "email": "mintzer.justin@gmail.com",
        "imageUrl": "https://i.imgur.com/N9Koe2G.jpg",
        "gpa": 4,
        "createdAt": "2018-12-05T23:02:45.257Z",
        "updatedAt": "2018-12-05T23:02:45.257Z",
        "campusId": 1
        },
        {
        "id": 24,
        "firstName": "first",
        "lastName": "LAST",
        "email": "email@email.com",
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "gpa": null,
        "createdAt": "2018-12-10T04:50:33.677Z",
        "updatedAt": "2018-12-10T04:50:33.677Z",
        "campusId": null
        },
        {
        "id": 2,
        "firstName": "bob",
        "lastName": "jones",
        "email": "bobbyboy1234@yahoo.com",
        "imageUrl": "https://i.imgur.com/GuAB8OE.jpg",
        "gpa": 3.7,
        "createdAt": "2018-12-05T23:02:45.270Z",
        "updatedAt": "2019-06-14T00:15:35.429Z",
        "campusId": 1
        }
    ]


    dispatch(fetchCampuses(arrayOfCampusesFromAPI));
    dispatch(fetchSingleCampus(id));


const removeCampusThunk = id => dispatch => {
  let resolvedActionObject = removeStudentThunk(student);
  dispatch(resolvedActionObject);
};

const addCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = addStudentThunk(student);
    dispatch(resolvedActionObject);    
};






const campusReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_CAMPUSES:
            return campuses;
        case GET_SINGLE_CAMPUS:
            return selectedCampus;
        case ADD_CAMPUS:
            return [...state, campus]
        case REMOVE_CAMPUS:
            return state.filter(campus=> campus.id !== action.id);
        default:    
            return state
    }
}

export {campusReducer, getCampuses, addCampus, removeCampus, getCampusesThunk, singleCampusThunk, addCampusThunk, removeCampusThunk}
