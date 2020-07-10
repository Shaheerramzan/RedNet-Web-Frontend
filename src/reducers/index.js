import { combineReducers } from "redux";
import donorsReducer from "./donorsReducer";
import { reducer as formReducer } from "redux-form";
import loginReducer from "./loginReducer";
import complaintReducer from "./complaintReducer";
import societyAdminReducer from "./societyAdminReducer";
import societyReducer from "./societyReducer";
import societyRequestReducer from "./societyRequestReducer";

const appReducer = combineReducers({
  donors: donorsReducer,
  form: formReducer,
  login: loginReducer,
  complaints: complaintReducer,
  societyAdmin: societyAdminReducer,
  society: societyReducer,
  societyRequest: societyRequestReducer,
});

const rootReducer = (state, action) => {
  if (action.type === "LOGOUT") {
    state.societyAdmin = undefined;
    state.donors = undefined;
    state.complaints = undefined;
    state.society = undefined;
    state.societyRequest = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
