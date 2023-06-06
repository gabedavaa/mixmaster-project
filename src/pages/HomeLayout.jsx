import React from "react";
import { Link } from "react-router-dom";

const HomeLayout = () => {
  return (
    <div>
      <h1>HomeLay</h1>
      <Link to="/about">About page</Link>
    </div>
  );
};

export default HomeLayout;
