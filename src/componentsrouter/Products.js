import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const Products = () => {
  return (
    <nav>
      <input type="search" placeholder="search product" />
      {"  "}
      <NavLink to="pc">pc</NavLink> 
      {"  "}
      <NavLink to="phone">phone</NavLink>
      <Outlet />
    </nav>
  );
};

export default Products;
