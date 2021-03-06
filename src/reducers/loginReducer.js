export default (state = {}, action) => {
  switch (action.type) {
    case "LOGIN":
      if (action.payload.type === true)
        return {
          ...state,
          isLogin: action.payload.type,
          JSessionID: action.payload.JSessionID,
          data: action.payload.data,
        };
      else
        return {
          ...state,
          isLogin: action.payload.type,
          data: action.payload.data,
          error: state.error === undefined ? 0 : state.error + 1,
        };
    case "LOGOUT":
      return {
        ...state,
        isLogin: action.payload,
        data: null,
        JSessionID: null,
        error: undefined,
      };
    case "GET_DATA":
      return state;
    default:
      return state;
  }
};
