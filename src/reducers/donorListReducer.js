
export default (state= [], action) => {
    switch (action.type) {
        case 'GET_DONORS':
            return action.payload;
            //_.set(state, ['donors'], action.payload);
        default:
            return state
    }
};
