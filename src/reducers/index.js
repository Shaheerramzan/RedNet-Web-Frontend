import { combineReducers } from "redux";
import donorListReducer from "./donorListReducer"
import donorEditReducer from "./donorReducer"
import { reducer as formReducer } from "redux-form"

export default combineReducers({
    donors: donorListReducer,
    donor: donorEditReducer,
    form: formReducer
});

