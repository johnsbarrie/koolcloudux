const usersReducer = function (state=[], action) {
  switch(action.type) {
    case 'USERS.SETUP':
      state = [...action.payload];
      break
    case 'USER.ADD':
      state = [...state, action.payload];
      break
    default:
  }
  return state;
};

export default usersReducer;
