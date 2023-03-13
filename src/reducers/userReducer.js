export const userInitValue = {};

export const userReducer = (state = userInitValue, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER_SUCCESS":
      return state;
    case "LOGOUT_USER_SUCCESS":
      return state;
    default:
      return state;
  }
};
