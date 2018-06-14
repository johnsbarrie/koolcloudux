import ProjectsConstants from "../constant/ProjectConstants"

const projectsReducer = function (projects=[], action) {
  switch(action.type) {
    case ProjectsConstants.FETCHED:
      projects = action.payload
      break;
    case ProjectsConstants.CREATED:
      console.log(action.payload)
      projects = [...projects, action.payload]  
      break;
    default:
  }
  return projects;
};

export default projectsReducer;