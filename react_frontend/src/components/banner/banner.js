import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { ThemeContext } from "../../contexts/ThemeContext";
import { makeStyles } from "@material-ui/core/styles";
import "./banner.css";

const banner = ({ title }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useContext(ThemeContext);
  const useStyles = makeStyles((t) => ({
    home: {
      color: theme.secondary,
      position: "absolute",
      top: 25,
      left: 25,
      padding: "7px",
      borderRadius: "50%",
      boxSizing: "content-box",
      fontSize: "2rem",
      cursor: "pointer",
      boxShadow:
        theme.type === "dark"
          ? "3px 3px 6px #ffffff40, -3px -3px 6px #00000050"
          : "3px 3px 6px #ffffff40, -3px -3px 6px #00000050",
      transition: "all 0.3s ease-in-out",
      "&:hover": {
        color: theme.tertiary,
        transform: "scale(1.1)",
      },
      [t.breakpoints.down("sm")]: {
        fontSize: "1.8rem",
      },
    },
  }));

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const classes = useStyles();
  return (
    <div
      className="banner"
      style={{ backgroundColor: theme.primary }}
    >
      <Link to="/">
        <AiOutlineHome className={classes.home} />
      </Link>
      <h1 style={{ color: theme.secondary }}>{title}</h1>
    </div>
  );
};

export default banner;
