import React, { Fragment } from "react";

import Header from "../Header";

import Footer from "../Footer";
import Routers from "../../Routers/Routers";
import EmpRouter from "../../Routers/EmpRouter";
const Layout = () => {
  return (
    <Fragment>
      <Fragment>
        <Header />
        <div>
          <Routers />
        </div>
        <Footer />
      </Fragment>
    </Fragment>
  );
};

export default Layout;
