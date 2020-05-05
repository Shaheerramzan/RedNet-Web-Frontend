export default (state = {}, action) => {
  switch (action.type) {
    case "GET_SOCIETY_ADMINS":
      console.log(action);
      return {
        ...state,
        list: action.payload,
      };
    case "ADD_SOCIETY_ADMIN":
      return { ...state, list: state.list.push(action.payload) };
    case "GET_SOCIETY_ADMIN":
      return { ...state, societyAdmin: action.payload };
    case "DELETE_SOCIETY_ADMIN":
      return {
        ...state,
        list: state.list.filter((d) => d.id !== action.payload),
      };
    default:
      return state;
  }
};
