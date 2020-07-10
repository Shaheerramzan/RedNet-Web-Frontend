import BackendLink from "../apis/BackendLink";
import TemplateLink from "../apis/TemplateLink";

export const getDonor = (id) => async (dispatch) => {
  const response = await BackendLink.get(`/donor?Id=${id}`);
  dispatch({ type: "GET_DONOR", payload: response.data.donor });
};

export const getDonors = (id) => async (dispatch) => {
  const response = await BackendLink.get(`/societyDonors?Id=${id}`);
  dispatch({ type: "GET_DONORS", payload: response.data.donors });
};

export const createDonor = (data) => async (dispatch) => {
  const response = await BackendLink.post("/create.action", data);
  if (response.status === 200)
    dispatch({ type: "ADD_DONORS", payload: response.data });
};

export const deleteDonor = (id) => async (dispatch) => {
  const response = await TemplateLink.delete(`/posts/${id}`);
  if (response.status === 200) dispatch({ type: "DELETE_DONOR", payload: id });
};

export const getComplaints = () => async (dispatch) => {
  const response = await TemplateLink.get("/posts");
  dispatch({ type: "GET_COMPLAINTS", payload: response.data });
};

export const resolveComplaint = ({ Id, Data }) => async (dispatch) => {
  const response = await TemplateLink.get("/posts");
  dispatch({
    type: "RESOLVE_COMPLAINT",
    payload: response.data,
    Id: Id,
  });
};

export const getSocieties = () => async (dispatch) => {
  const response = await BackendLink.get("/societies");
  dispatch({
    type: "GET_SOCIETIES",
    payload: response.data.societies,
  });
};

export const createSociety = (data) => async (dispatch) => {
  const response = await BackendLink.post("/create.action", data);
  if (response.status === 200)
    dispatch({ type: "ADD_SOCIETY", payload: response.data });
};

export const deleteSociety = (id) => async (dispatch) => {
  const response = await TemplateLink.delete(`/posts/${id}`);
  if (response.status === 200)
    dispatch({ type: "DELETE_SOCIETY", payload: id });
};

export const getSociety = (id) => async (dispatch) => {
  const response = await BackendLink.get(`/society?Id=${id}`);
  dispatch({ type: "GET_SOCIETY", payload: response.data.society });
};

export const getSocietyRequests = () => async (dispatch) => {
  const response = await BackendLink.get("/societyRequests");
  dispatch({
    type: "GET_SOCIETY_REQUESTS",
    payload: response.data.societyRequests,
  });
};

export const createSocietyRequest = (data) => async (dispatch) => {
  const response = await BackendLink.post("/create.action", data);
  if (response.status === 200)
    dispatch({ type: "ADD_SOCIETY_REQUEST", payload: response.data });
};

export const deleteSocietyRequest = (id) => async (dispatch) => {
  const response = await BackendLink.delete(`/delete?Id=${id}&Type=4`);
  if (response.status === 200)
    dispatch({ type: "DELETE_SOCIETY_REQUEST", payload: id });
};

export const getSocietyRequest = (id) => async (dispatch) => {
  const response = await BackendLink.get(
    `/societyRequest?societyRequestId=${id}`
  );
  dispatch({
    type: "GET_SOCIETY_REQUEST",
    payload: response.data.societyRequest,
  });
};

export const getSocietyAdmins = (id) => async (dispatch) => {
  const response = await BackendLink.get(`/societyAdmins?Id=${id}`);
  dispatch({
    type: "GET_SOCIETY_ADMINS",
    payload: response.data.societyAdmins,
  });
};

export const getSocietyAdmin = (id) => async (dispatch) => {
  const response = await BackendLink.get(`/societyAdmin?Id=${id}`);
  dispatch({ type: "GET_SOCIETY_ADMIN", payload: response.data.societyAdmin });
};

export const createSocietyAdmin = (data) => async (dispatch) => {
  const response = await BackendLink.post("/create.action", data);
  if (response.status === 200)
    dispatch({ type: "ADD_SOCIETY_ADMIN", payload: response.data });
};

export const deleteSocietyAdmin = (id) => async (dispatch) => {
  const response = await TemplateLink.delete(`/posts/${id}`);
  if (response.status === 200)
    dispatch({ type: "DELETE_SOCIETY_ADMIN", payload: id });
};

export const doLogin = ({ Username, Password, Role }) => async (dispatch) => {
  const response = await BackendLink.post(
    "/login.action",
    `Username=${Username}&Password=${Password}&Role=${Role}`
  );
  if (response.data.JSessionId !== null) {
    dispatch({ type: "LOGIN", payload: { type: true, data: response.data } });
  } else {
    dispatch({ type: "LOGIN", payload: { type: false, data: null } });
  }
};

export const doLogout = () => async (dispatch) => {
  const response = await BackendLink.post(`/logout.action`);
  if (response.data.JSessionId === null) {
    dispatch({ type: "LOGOUT", payload: null });
  }
};

export const getData = () => (dispatch) => {
  dispatch({ type: "GET_DATA", payload: null });
};

export const setCancelState = (value) => (dispatch) => {
  dispatch({ type: "SET_CANCEL", payload: value });
};
