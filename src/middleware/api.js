import ProjectConstants from "../constant/ProjectConstants"

const apiMiddleWare = (store) => (next) => (action) => {
  switch (action.type) {
    case ProjectConstants.FETCH:
      console.log(ProjectConstants.FETCH);
      break
    case ProjectConstants.SELECT:
      console.log('ProjectConstants.SELECT', action.payload)
      break;   
    default:
  }
  
  next(action)
}

export default apiMiddleWare;