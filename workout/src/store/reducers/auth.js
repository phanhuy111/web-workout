/**
 ** Name:
 ** Author:
 ** CreateAt:
 ** Description:
 **/
/* LIBRARY */
/* TYPE REDUX */
import * as types from "../types";

const initialState = {
  isLogin: false,
};

export default function (state = initialState, action = {}) {
  switch (action.type) {
    case types.SET_LOGIN:
      return {
        ...state,
      };

    default:
      return state;
  }
}
