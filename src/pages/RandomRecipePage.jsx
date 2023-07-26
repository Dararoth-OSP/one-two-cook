import React, { Fragment } from "react";
import RandomLayout from "./RandomLayout";
import { Outlet } from "react-router-dom";

const Random = () => {
  return (
    <Fragment>
      <RandomLayout />
      <Outlet />
    </Fragment>
  );
};

export default Random;
