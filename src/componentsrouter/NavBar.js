import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth } from "./Auth";

const NavBar = () => {
  const auth = useAuth();
  return (
    <nav>
      <Link to="/">home</Link>
      {"  "}
      <NavLink to="about">about</NavLink>
      {"  "}
      <NavLink to="products">products</NavLink>
      {"  "}
      <NavLink to="users">users</NavLink>
      {"  "}
      {!auth.User ? (
        <NavLink to="login">login</NavLink>
      ) : (
        <NavLink to="profile">profile</NavLink>
      )}
    </nav>
  );
};

export default NavBar;
