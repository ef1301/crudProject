
const arrayOfCampusesFromAPI = [
    {
        "id": 4,
        "name": "Hunter College",
        "numStudents": 2,
        "students": [],
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "address": "2018-12-06T19:58:21.314Z",
        "description": "2018-12-06T19:58:21.314Z"
    },
    {
        "id": 5,
        "name": "Cornell University",
        "numStudents": 2,
        "students": [],
        "imageUrl": "http://i.imgur.com/AItCxSs.jpg",
        "address": "2018-12-06T19:58:21.314Z",
        "description": "2018-12-06T19:58:21.314Z"
    }
]
export const fetchCampusesThunk = () => (dispatch) => {
    dispatch(fetchCampuses(arrayOfCampusesFromAPI));
  
}
export const removeCampusThunk = (id) => (dispatch) => {
  let resolvedActionObject = removeCampus(id);
  dispatch(resolvedActionObject);
};

export const addCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = addCampusThunk(campus);
    dispatch(resolvedActionObject);    
};

export const singleCampusThunk = campus => (dispatch) => {
  let resolvedActionObject = singleCampusThunk(campus);
  dispatch(resolvedActionObject);
};

const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const FETCH_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

function fetchCampuses(campuses){
    return {
	type:FETCH_CAMPUSES,
	campuses
    }
}

function fetchSingleCampus(id){
    return {
	type:FETCH_SINGLE_CAMPUS,
	id
    }
}

function addCampus(campus){
    return {
	type:ADD_CAMPUS,
	campus
    }
}

function removeCampus(id){
    return {
	type:REMOVE_CAMPUS,
	id
    }
}

function allCampusReducer(state = [], action) {
    switch(action.type){
        case FETCH_CAMPUSES:
            return action.campuses;
        case FETCH_SINGLE_CAMPUS:
            return action.id;
        case ADD_CAMPUS:
            arrayOfCampusesFromAPI = [...arrayOfCampusesFromAPI, action.payload]
            return [...state, action.campus]
        case REMOVE_CAMPUS:
            return state.filter(campus=> campus.id !== action.id);
        default:    
            return state
    }
}

export default allCampusReducer;


