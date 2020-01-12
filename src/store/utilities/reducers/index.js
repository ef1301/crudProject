//A reducer to combine campuses and students

import { campusReducer } from "./campusReducer";
import { studentReducer } from "./studentReducer";
import { combineReducers } from "redux";

 const initialState = {
   campuses:[],
   students:[]
 }

const rootReducer = combineReducers({
  students: studentReducer,
  campuses: campusReducer
});

export default rootReducer;
