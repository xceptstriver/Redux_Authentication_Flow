const initialsState = {
  token: 'abcd',
};

export const loginReducer = (state = initialsState, action) => {
  const {type, payload} = action;
  switch (type) {
    case 'SET_LOGIN_TOKEN':
      return {
        ...state,
        token: payload.data,
      };

    default:
      return state;
  }
};
