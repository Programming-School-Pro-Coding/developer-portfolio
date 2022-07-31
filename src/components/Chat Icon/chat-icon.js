import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { BiComment } from "react-icons/bi";

import "./chat-icon.css";

function BackToTop(onclickfunc) {
  const useStyles = makeStyles(() => ({
    icon: {
      fontSize: "3rem",
      color: "#019DE5",
    },
  }));

  const classes = useStyles();

  return (
    <div style={{ display: "inline" }} className="chatIcon">
      <button
        aria-label="Chat-Icon"
        onClick={onclickfunc}
      >
        <BiComment className={classes.icon} />
      </button>
    </div>
  );
}

export default BackToTop;
