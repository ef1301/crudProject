
const FETCH_CAMPUSES = 'FETCH_CAMPUSES';
const FETCH_SINGLE_CAMPUS = 'GET_SINGLE_CAMPUS'
const ADD_CAMPUS = 'ADD_CAMPUS'
const REMOVE_CAMPUS = 'REMOVE_CAMPUS'

const fetchCampuses = (campuses) => ({
    type:GET_CAMPUSES,
    campuses
})

const fethtSingleCampus = (selectedCampus) => ({
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

export const getCampusesThunk = id => dispatch => {
  let resolvedActionObject = fetchCampuses(id);
  dispatch(resolvedActionObject);
};

const singleCampusThunk = (campusId) => {
    return async (dispatch) => {
        await axios.get(`/api/campuses/${campusId}`)
        .then(response => response.data)
        .then(selectedCampus => dispatch(getSingleCampus(selectedCampus)))
        .catch(console.err)
    }
}

const addCampusThunk = (campus) => {
    return async (dispatch) => {
      return axios.post('/api/campuses', campus)
        .then(res => res.data)
        .then(newCampus => dispatch(addCampus(newCampus)))
        .catch(console.err)
    }
}

const removeCampusThunk = (id) => {
    return (dispatch) => {
        return axios.delete(`/api/campuses/${id}`)
        .then(dispatch(removeCampus(id)))
        .catch(console.err)
    }
}
  

const state = {
    campuses: [],
    selectedCampus: []
}


const campusReducer = (state = [], action) => {
    switch(action.type){
        case FETCH_CAMPUSES:
        return {...state, campuses:action.campuses}
        case FETCH_SINGLE_CAMPUS:
        return {...state, selectedCampus:action.selectedCampus}
        case ADD_CAMPUS:
        return {...state, campuses:[...state.campuses, action.campus]}
        case REMOVE_CAMPUS:
        return {...state, campuses:state.campuses.filter(campus=> campus.id !== action.id)}
    default:    
    return state
    }
}

export {campusReducer, getCampuses, addCampus, removeCampus, getCampusesThunk, singleCampusThunk, addCampusThunk, removeCampusThunk}
