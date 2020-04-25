import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import "./App.css";

import LoginHomepage from "./Login/LoginHomepage";
import LoginMainPage from "./Login/LoginMainPage";
import SocietyAdminHomepage from "./SocietyAdmin/SocietyAdminHomepage";
import SocietyHeadHomepage from "./SocietyHead/SocietyHeadHomepage";
import SuperAdminHomepage from "./SuperAdmin/SuperAdminHomepage";
import ManageDonors from "./SocietyAdmin/ManageDonors";

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  library.add(fab, faCheckSquare, faCoffee, faTrash);
  return (
    <BrowserRouter>
      <Route exact path={"/"} component={LoginHomepage} />
      <Route exact path={"/:name/Login"} component={LoginMainPage} />
      <Route exact path={"/society-admin/"} component={SocietyAdminHomepage} />
      <Route exact path={"/society-head/"} component={SocietyHeadHomepage} />
      <Route exact path={"/super-admin/"} component={SuperAdminHomepage} />
      <Route exact path={"/test/"} component={ManageDonors} />
    </BrowserRouter>
  );
}
export default App;
