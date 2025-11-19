import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/user/Header";

const Layout: React.FC = () => {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
