// import { getData } from "../../utils/localstorage";
import * as types from "./actionTypes";

const init = {
  isAuth: false,
  isLoading: false,
  isError: false,
  user: "",
};

export const reducer = (state = init, { type, payload }) => {
  switch (type) {
    case types.LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        isError: false,
        isAuth: false,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...state,
        isAuth: payload,
        isLoading: false,
        isError: false,
      };
    case types.LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
        isAuth: false,
      };
    default:
      return state;
  }
};
