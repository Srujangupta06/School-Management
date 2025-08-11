import React from "react";
import Home from "./screens/Home";
import Login from "./screens/Login";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <h5>Header</h5>
      <Outlet />
    </>
  );
};

export default App;
