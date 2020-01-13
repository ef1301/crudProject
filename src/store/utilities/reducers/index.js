//A reducer to combine campuses and students

import { campusReducer } from "./campusReducer";
import { fetchStudentsThunk, addStudentThunk, removeStudentThunk } from "./studentReducer";
import { combineReducers } from "redux";

 const initialState = {
   campuses:[],
   students:[]
 }

const rootReducer = combineReducers({
  students: { fetchStudentsThunk, addStudentThunk, removeStudentThunk },
  campuses: campusReducer
});

export default rootReducer;
