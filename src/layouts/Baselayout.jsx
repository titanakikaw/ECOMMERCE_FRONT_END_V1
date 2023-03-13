import React from "react";
import { Outlet } from "react-router-dom";

const Baselayout = () => {
  return (
    <div className="h-screen">
      <Outlet />
    </div>
  );
};

export default Baselayout;
