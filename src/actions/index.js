import GetDonors from "../apis/GetDonors";

export const getDonor = (id) => async dispatch => {
    const response = await GetDonors.get(`/person/${id}`);
    dispatch({ type: "GET_DONOR", payload: response.data });
};

export const getDonors = () => async dispatch => {
    const response = await GetDonors.get("/person");
    dispatch({ type: "GET_DONORS", payload: response.data });
};

export const createDonor = () => async dispatch => {
    const response = await GetDonors.get("/person");
    dispatch({ type: "GET_DONORS", payload: response.data });
};
