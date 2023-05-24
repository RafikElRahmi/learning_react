import React, { useState } from "react";
import { useAuth } from "./Auth";
import { useLocation, useNavigate } from "react-router-dom";

const Logedin = (value) => {
  const [name, setname] = useState("");
  const auth = useAuth();
    const navigate = useNavigate();
    const location = useLocation()
    const redirectPath = location.state?.path || '/' 
  const handlelogin = () => {
    auth.login(name);
    navigate(redirectPath, { replace: true });
  };
  return (
    <div>
      <input type="text" onChange={(e) => setname(e.target.value)} />
      <button onClick={handlelogin}>log in</button>
    </div>
  );
};

export default Logedin;
