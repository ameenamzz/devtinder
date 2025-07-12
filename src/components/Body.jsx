import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Body = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Body;
