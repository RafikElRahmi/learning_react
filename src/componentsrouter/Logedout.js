import React from "react";
import { useAuth } from "./Auth";
import { useNavigate } from "react-router-dom";

const Logedout = () => {
  const auth = useAuth();
    const name = auth.User;
    const navigate = useNavigate()
  const handlelogout = () => {
      auth.logout();
      navigate('/')
  };
  return (
    <div>
      <div>hello {name}</div>
      <button onClick={handlelogout}>log out</button>
    </div>
  );
};

export default Logedout;
