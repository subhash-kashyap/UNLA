import { combineReducers } from "redux";

export const reducers = combineReducers({
  os: currentOS,
  user: currentUser
});

function currentOS(state = "", action) {
  switch (action.type) {
    case "CURRENT_OS":
      return action.payload;
    // case "persist/REHYDRATE":
    //   return action.payload.os ? action.payload.os : state;
    //   break;
    default:
      return state;
  }
}

function currentUser(state = "", action) {
  switch (action.type) {
    case "CURRENT_OS":
      return action.payload;
    // case "persist/REHYDRATE":
    //   return action.payload.user ? action.payload.user : state;
    //   break;
    default:
      return state;
  }
}
