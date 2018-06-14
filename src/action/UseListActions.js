import * as UserConstants from "../constant/UserConstants"

export function changeUserName(name) {
  return {
    type: UserConstants.CHANGE_NAME,
    payload: name
  }
}