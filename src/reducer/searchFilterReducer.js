import ProjectsConstants from "../constant/ProjectConstants"

const projectsSearchReducer = function (searchFilter='', action) {
  switch(action.type) {
    case ProjectsConstants.SEARCH_FILTER:
      searchFilter = action.payload
      break;
    default:
  }
  return searchFilter;
};

export default projectsSearchReducer;