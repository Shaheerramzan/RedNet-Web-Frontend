import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import LoginHomepage from "./Login/LoginHomepage";
import LoginMainPage from "./Login/LoginMainPage";
import SocietyAdminHomepage from "./SocietyAdmin/SocietyAdminHomepage";
import SocietyHeadHomepage from "./SocietyHead/SocietyheadHomepage";
import SuperAdminHomepage from "./SuperAdmin/SuperAdminHomepage";
import createDonor from "./SocietyAdmin/createDonor";
import editDonor from "./SocietyAdmin/editDonor";

function App() {
  return (
    <BrowserRouter>
      <Route exact path={"/"} component={LoginHomepage} />
      <Route exact path={"/:name/Login"} component={LoginMainPage} />
      <Route exact path={"/society-admin/"} component={SocietyAdminHomepage} />
      <Route exact path={"/society-admin/create"} component={createDonor} />
      <Route exact path={"/society-admin/:id/edit"} component={editDonor} />
      <Route exact path={"/society-head/"} component={SocietyHeadHomepage} />
      <Route exact path={"/super-admin/"} component={SuperAdminHomepage} />
    </BrowserRouter>
  );
}
export default App;
