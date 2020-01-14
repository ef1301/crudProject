import { default as AllCampusesView } from './AllCampusesView';
import { default as AllStudentsView } from './AllStudentsView';
import { combineReducers } from 'redux'

const Home = combineReducers({
    students: AllStudentsView,
    campuses: AllCampusesView
})

export default Home

 