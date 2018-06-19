import UserConstants from "../constant/UserConstants"
import store from "./store/store"

export function changeUserName(name) {
  return {
    type: UserConstants.CHANGE_NAME,
    payload: name
  }
}