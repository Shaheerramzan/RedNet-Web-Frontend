import {combineReducers} from "redux";
import donorsReducer from "./donorsReducer";
import {reducer as formReducer} from "redux-form";
import loginReducer from "./loginReducer";
import complaintReducer from "./complaintReducer";
import societyAdminReducer from "./societyAdminReducer";

export default combineReducers({
	donors: donorsReducer,
	form: formReducer,
	login: loginReducer,
	complaints: complaintReducer,
	societyAdmin: societyAdminReducer,
});
