export const setLoginToken = data => {
  return {
    type: 'SET_LOGIN_TOKEN',
    payload: {
      data,
    },
  };
};
