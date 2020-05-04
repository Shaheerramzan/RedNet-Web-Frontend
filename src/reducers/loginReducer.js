export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload.type === true)
        return {
          ...state,
          isLogin: action.payload.type,
          data: action.payload.data,
        };
      else
        return {
          ...state,
          isLogin: action.payload.type,
          data: action.payload.data,
          error: true,
        };
    //_.set(state, ['donor'], action.payload);
    case "LOGOUT":
      return {
        ...state,
        isLogin: action.payload,
        data: null,
        error: undefined,
      };
    case "GET_DATA":
      return state;
    default:
      return state;
  }
};
