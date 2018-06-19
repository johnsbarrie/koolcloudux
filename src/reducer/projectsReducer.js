import ProjectsConstants from "../constant/ProjectConstants"

const projectsReducer = function (projects=[], action) {
  switch(action.type) {
    case ProjectsConstants.FETCHED:
      projects = action.payload
      break;
    case ProjectsConstants.CREATED:
      projects = [...projects, action.payload]  
      break;
    default:
  }
  return projects;
};

export default projectsReducer;