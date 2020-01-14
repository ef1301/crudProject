import { default as allStudentsReducer } from "../store/utilities/studentReducer";
import { default as allCampusesReducer } from "../store/utilities/campusReducer";
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    students: allStudentsReducer,
    campuses: allCampusesReducer
})

export default rootReducer;
