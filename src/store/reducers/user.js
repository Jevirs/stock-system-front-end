import * as types from "../action-types";
import { getToken } from "@/utils/auth";
import { roleDict } from "@/utils/enum";

const initUserInfo = {
  name: "",
  role: "",
  token: getToken(),
};
export default function user(state = initUserInfo, action) {
  switch (action.type) {
    case types.USER_SET_USER_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case types.USER_SET_USER_INFO:
      return {
        ...state,
        name: action.user_name,
        role: roleDict[action.role_id],
      };
    case types.USER_RESET_USER:
      return {};
    default:
      return state;
  }
}
