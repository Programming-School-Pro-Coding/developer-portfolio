import React from "react";
import { Link } from "react-router-dom";

import "./NotFound.css";

const NotFound = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <h2>Oops! Page not found.</h2>
        <h1>404</h1>
        <p>We can't find the page you're looking for.</p>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
};

export default NotFound;
