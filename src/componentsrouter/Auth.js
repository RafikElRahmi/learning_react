import React, { useContext, useState } from "react";

const AuthUser = React.createContext(null);
export const Auth = ({ children }) => {
  const [User, setUser] = useState(null);
  const login = (User) => {
    setUser(User);
  };
  const logout = () => {
    setUser(null);
  };
  return (
    <AuthUser.Provider value={{ User, login, logout }}>
      {children}
    </AuthUser.Provider>
  );
};
export const useAuth = () => {
  return useContext(AuthUser);
};
