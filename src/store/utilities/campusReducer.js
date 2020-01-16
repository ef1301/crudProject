const EDIT_CAMPUS = 'EDIT_CAMPUS';
const FETCH_CURRENT_CAMPUS = 'FETCH_CURRENT_CAMPUS'
const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const ADD_CAMPUS = 'ADD_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

const arrayOfCampusesFromAPI = [
   
    {
        "id": 4,
        "name": "Hunter College",
        "numStudents": 2,
        "students": [],
        "imageUrl": "http://www.hunter.cuny.edu/research/repository/images/hunter_campus1.jpg",
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
    let resolvedActionObject = addCampus(campus);
    dispatch(resolvedActionObject);    
};

export const currentCampusThunk = id => (dispatch) => {
  let resolvedActionObject = fetchCurrentCampus(id);
  dispatch(resolvedActionObject);

};

export const editCampusThunk = (campus) => (dispatch) => {
    let resolvedActionObject = editCampus(campus);
    dispatch(editCampus(campus));
}


function fetchCampuses(campuses){
    return {
	type:FETCH_CAMPUSES,
	campuses
    }
}

function fetchCurrentCampus(id){
    return {
	type:FETCH_CURRENT_CAMPUS,
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

function editCampus(campus){
    return {
        type: EDIT_CAMPUS,
        campus
    }
}

function allCampusReducer(state = [], action) {
    switch(action.type){
        case FETCH_CAMPUSES:
            return action.campuses;
        case FETCH_CURRENT_CAMPUS:
            return state.filter(campus => campus.id === action.id);
        case ADD_CAMPUS:
            arrayOfCampusesFromAPI = [...arrayOfCampusesFromAPI, action.payload]
            return [...state, action.campus]
        case REMOVE_CAMPUS:
            return state.filter(campus=> campus.id !== action.id);
        case EDIT_CAMPUS:
            return action.payload;
        default:    
            return state
    }
}

export default allCampusReducer;


