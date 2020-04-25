export default (state = {}, action) => {
  switch (action.type) {
    case "GET_DONORS":
      return {
        ...state,
        list: action.payload,
      };
    //_.set(state, ['donors'], action.payload);
    case "GET_DONOR":
      return action.payload;
    case "DELETE_DONOR":
      console.log(state);
      return {
        ...state,
        list: state.list.filter((d) => d.id !== action.payload),
      };
    default:
      return state;
  }
};
