import { default as allStudents } from "../store/utilities/studentReducer";
import { default as allCampuses } from "../store/utilities/campusReducer";

const rootReducer = combineReducers({
    students: allStudents,
    campuses: allCampuses
})

export default rootReducer