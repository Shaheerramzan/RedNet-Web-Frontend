export default (state = {}, action) => {
  switch (action.type) {
    case "GET_DONORS":
      return {
        ...state,
        list: action.payload,
      };
    case "ADD_DONOR":
      return {...state, list: state.list.push(action.payload)};
    case "GET_DONOR":
	    return {...state, donor: action.payload};
    case "DELETE_DONOR":
      return {
        ...state,
        list: state.list.filter((d) => d.id !== action.payload),
      };
    default:
      return state;
  }
};
