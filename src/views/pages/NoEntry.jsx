/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
// react library for routing
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
// core components
import AdminFooter from "components/Footers/AdminFooter.js";

function NoEntry() {

  return (
    <>
      <div className="main-content">
        <img
            alt="..."
            src={require("assets/img/theme/no-entry.jpeg").default}
            top
            className="img-fluid mx-auto d-block"
        />
      </div>
    </>
  );
}

export default NoEntry;
