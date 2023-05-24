import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import NavBar from "./NavBar";
import Order from "./Order";
import Nomatch from "./Nomatch";
import Pc from "./Pc";
import Phone from "./Phone";
import Products from "./Products";
import Users from "./Users";
import Admin from "./Admin";
import User from "./User";
import Profile from "./Profile";
import { Auth } from "./Auth";
import Logedin from "./Login";
import RequireAuth from "./RequireAuth";
const LazyAbout = React.lazy(() => import("./About"));

const Routerdom = () => {
  return (
    <Auth>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="about"
          element={
            <React.Suspense fallback="loading ...">
              <LazyAbout />
            </React.Suspense>
          }
        ></Route>
        <Route path="order" element={<Order />}></Route>
        <Route path="products" element={<Products />}>
          <Route index element={<Pc />} />
          <Route path="pc" element={<Pc />}></Route>
          <Route path="phone" element={<Phone />}></Route>
        </Route>
        <Route path="users" element={<Users />}>
          <Route index element={<Admin />} />
          <Route path=":id" element={<User />}></Route>
          <Route path="admin" element={<Admin />}></Route>
        </Route>
        <Route
          path="profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        ></Route>
        <Route path="login" element={<Logedin />} />
        <Route path="*" element={<Nomatch />}></Route>
      </Routes>
    </Auth>
  );
};

export default Routerdom;
