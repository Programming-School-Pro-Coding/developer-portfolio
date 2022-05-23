import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BsTwitter } from "react-icons/bs";

import { ThemeContext } from "../../contexts/ThemeContext";
import "./twitter.css";

function BackToTop() {
  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: "3rem",
      color: "#019DE5",
    },
  }));

  const classes = useStyles();

  return (
    <div style={{ display: "inline" }} className="Twitter">
      <a
        aria-label="Twitter"
        href="https://twitter.com/Programing_Pro"
        target="_blank"
        rel="noreferrer"
      >
        {/* <FaTwitter className={classes.icon} /> */}
        <BsTwitter className={classes.icon} />
      </a>
    </div>
  );
}

export default BackToTop;
