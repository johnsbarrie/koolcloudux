import { combineReducers } from "redux"
import projects from "./projectsReducer"
import users from "./usersReducer"
import searchFilter from "./searchFilterReducer"

export default combineReducers({ 
  users,
  projects,
  searchFilter,
});

