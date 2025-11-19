import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <>
      <div>{/**provide header herer */}</div>

      <div>
        <Outlet/>
      </div>
    </>
  );
};

export default Layout;
