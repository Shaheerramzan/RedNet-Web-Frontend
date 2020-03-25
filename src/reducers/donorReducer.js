export default (state= {}, action) => {
    switch (action.type) {
        case 'GET_DONOR':
            return action.payload;
        //_.set(state, ['donor'], action.payload);
        default:
            return state
    }
};
