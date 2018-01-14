export const currentOS = route => {
  return {
    type: "CURRENT_OS",
    payload: route
  };
};
export const currentUser = user => {
  return {
    type: "CURRENT_USER",
    payload: user
  };
};
