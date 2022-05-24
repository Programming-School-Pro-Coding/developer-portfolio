import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import { ThemeContext } from "../../contexts/ThemeContext";
import { HiArrowRight } from "react-icons/hi";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import ProjectsData from './github_data/repositories.json';

function Projects() {
  const { theme } = useContext(ThemeContext);

  const useStyles = makeStyles(() => ({
    viewAllBtn: {
      color: theme.tertiary,
      backgroundColor: theme.primary,
      transition: "color 0.2s",
      "&:hover": {
        color: theme.secondary,
        backgroundColor: theme.primary,
      },
    },
    viewArr: {
      color: theme.tertiary,
      backgroundColor: theme.secondary70,
      width: "40px",
      height: "40px",
      padding: "0.5rem",
      fontSize: "1.05rem",
      borderRadius: "50%",
      cursor: "pointer",
      transition: "background-color 0.2s",
      "&:hover": {
        color: theme.tertiary,
        backgroundColor: theme.secondary,
      },
    },
  }));

  const classes = useStyles();

  return (
    <>
      {ProjectsData.data.length > 0 && (
        <div
          className="projects"
          id="projects"
          style={{ backgroundColor: theme.secondary }}
        >
          <div className="projects--header">
            <h1
              className="main-title"
              style={{ transform: "translateY(25px)" }}
            >
              Projects
            </h1>
          </div>
          <div className="projects--body">
            <div className="projects--bodyContainer">
              {ProjectsData.data.slice(0, 3).map((repo) => {
                return <SingleProject repo={repo} theme={theme} />;
              })}
            </div>

            {ProjectsData.data.length > 3 && (
              <div className="projects--viewAll">
                <Link to="/projects">
                  <button className={classes.viewAllBtn}>
                    View All
                    <HiArrowRight className={classes.viewArr} />
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
