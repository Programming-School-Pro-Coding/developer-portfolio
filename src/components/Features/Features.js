import React, { useContext } from "react";

import { ThemeContext } from "../../contexts/ThemeContext";
import { javascript, react, Vercel, CSS3 } from "../../theme/images";
import "./Features.css";

const Features = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className="stats"
      id="stats"
      style={{ backgroundColor: theme.secondary }}
    >
      <h2 className="main-title" style={{ transform: "translateY(20px)" }}>
        Our Awesome Stats
      </h2>
      <div className="container" style={{ backgroundColor: theme.secondary }}>
        <div className="box">
          <i className="far fa-user fa-2x fa-fw"></i>
          <span className="number">200</span>
          <span className="text">Customers</span>
        </div>
        <div className="box">
          <i className="fas fa-code fa-2x fa-fw"></i>
          <span className="number">400+</span>
          <span className="text">Projects</span>
        </div>
        <div className="box">
          <i className="fas fa-globe-asia fa-2x fa-fw"></i>
          <span class="number">1</span>
          <span class="text">Country</span>
        </div>
      </div>
      <br />
      <h2 className="main-title" style={{ transform: "translateY(20px)" }}>
        Technologies
      </h2>
      <div className="container">
        <div className="box flex">
          <img src={javascript} alt="JavaScript" className="tech" />
        </div>
        <div className="box flex">
          <img src={react} alt="React JS" className="tech" />
        </div>
        <div className="box flex">
          <img src={CSS3} alt="CSS3" className="tech" />
        </div>
        <div className="box flex">
          <img src={Vercel} alt="Vercel" className="tech" />
        </div>
      </div>
    </div>
  );
};

export default Features;