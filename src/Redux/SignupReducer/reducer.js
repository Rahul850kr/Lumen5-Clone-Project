import * as types from "./actionTypes";

const init = {
  userDetails: [],
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.SIGNUP_SUCCESS:
      return {
        ...state,
        userDetails: payload,
      };
     
    default:
      return state;
  }
};
