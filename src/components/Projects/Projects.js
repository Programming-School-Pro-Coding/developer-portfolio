import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Fade } from "react-reveal";

import { ThemeContext } from "../../contexts/ThemeContext";
import { HiArrowRight } from "react-icons/hi";

import "./Projects.css";
import SingleProject from "./SingleProject/SingleProject";
import ProjectsData from './github_data/repositories.json';
import IssueCard from "./IssueCard/IssueCard";
import issuesData from "../Projects/github_data/issues.json";
import PullRequestCard from './PullRequestCard/PullRequestCard';
import pullRequestsData from './github_data/pull_requests.json';
import OrganizationList from './OrganizationList/OrganizationList'
import OrganizationsData from './github_data/organizations.json'

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
          <div className="issue-header">
            <h1 className="secondary-title" style={{ color: theme.primary }}>
              Issues
            </h1>
          </div>
          <div className="issues-body-div">
            {issuesData["data"].map((issue) => {
              return <IssueCard issue={issue} />;
            })}
          </div>
          <div className="pull-requests-header-div">
            <Fade bottom duration={2000} distance="20px">
              <h1 className="secondary-title" style={{ color: theme.primary }}>
                Pull Requests
              </h1>
            </Fade>
          </div>
          <div className="pull-request-body-div">
            {pullRequestsData["data"].map((pullRequest) => {
              return <PullRequestCard pullRequest={pullRequest} />;
            })}
          </div>
          {ProjectsData.data.length > 3 && (
            <div className="projects--viewAll">
              <Link to="/pullrequests">
                <button className={classes.viewAllBtn}>
                  View All
                  <HiArrowRight className={classes.viewArr} />
                </button>
              </Link>
            </div>
          )}
          <div id="organizations">
            <div className="organizations-header-div">
              <Fade bottom duration={2000} distance="20px">
                <h1
                  className="main-title0"
                  style={{ color: theme.primary }}
                >
                  Contributed Organizations
                </h1>
              </Fade>
            </div>
            <OrganizationList logos={OrganizationsData["data"]} />
          </div>
        </div>
      )}
    </>
  );
}

export default Projects;
