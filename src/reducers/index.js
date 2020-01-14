import { default as allStudentsReducer } from "../store/utilities/studentReducer";
import { default as allCampusReducer } from "../store/utilities/campusReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  allStudents: allStudentsReducer,
  campuses: allCampusReducer
});

export default rootReducer;
