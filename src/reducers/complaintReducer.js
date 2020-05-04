export default (state = {}, action) => {
	switch (action.type) {
		case "GET_COMPLAINTS":
			return action.payload;
		case "RESOLVE_COMPLAINT":
			return action.payload.filter((c) => c.id !== action.Id);
		default:
			return state;
	}
};
