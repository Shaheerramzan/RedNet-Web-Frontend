import { combineReducers } from "redux";
import donorsReducer from "./donorsReducer";
import { reducer as formReducer } from "redux-form";
import loginReducer from "./loginReducer";

export default combineReducers({
  donors: donorsReducer,
  form: formReducer,
  login: loginReducer,
});
