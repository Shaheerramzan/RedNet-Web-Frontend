export default (state = {}, action) => {
  switch (action.type) {
    case "GET_SOCIETY_REQUESTS":
      return {
        ...state,
        list: action.payload,
      };
    case "ADD_SOCIETY_REQUEST":
      return { ...state, list: state.list.push(action.payload) };
    case "GET_SOCIETY_REQUEST":
      return { ...state, societyRequest: action.payload };
    case "DELETE_SOCIETY_REQUEST":
      return {
        ...state,
        list: state.list.filter((d) => d.id !== action.payload),
      };
    default:
      return state;
  }
};
