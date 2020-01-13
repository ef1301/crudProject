//A reducer to combine campuses and students

import { singleCampusThunk, removeCampusThunk, addCampusThunk, fetchCampusesThunk   } from "./campusReducer";
import {  fetchStudentsThunk, addStudentThunk, removeStudentThunk } from "./studentReducer";
import { combineReducers } from "redux";

 const initialState = {
   campuses:[],
   students:[]
 }

const rootReducer = combineReducers({
  students: { fetchStudentsThunk, addStudentThunk, removeStudentThunk },
  campuses: { singleCampusThunk, fetchCampusesThunk, removeCampusThunk, addCampusThunk  }
});

export default rootReducer;
