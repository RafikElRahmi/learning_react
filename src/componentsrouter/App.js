import React from "react";
import { BrowserRouter } from "react-router-dom";
import Routerdom from "./Routerdom";

const Approuter = () => {
  return (
    <div>
      <BrowserRouter>
        <Routerdom />
      </BrowserRouter>
    </div>
  );
};

export default Approuter;
 