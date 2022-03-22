const INITIAL_STATE = {
  current: '',
};

const friendsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_FETCH_SUCCEEDED':
      state.current = action.payload;
      return {...state};
    default:
      return state;
  }
};

export default friendsReducer;
