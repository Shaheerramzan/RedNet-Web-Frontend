export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        isLogin: action.payload.type,
        data: action.payload.data,
      };
    //_.set(state, ['donor'], action.payload);
    case "LOGOUT":
      return {
        ...state,
        isLogin: action.payload,
        data: null,
      };
    case "GET_DATA":
      return state;
    default:
      return state;
  }
};
