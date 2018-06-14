import { combineReducers } from "redux"
import projects from "./projectsReducer"
import users from "./usersReducer"

export default combineReducers({ 
  users,
  projects,
});

