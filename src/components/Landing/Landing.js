import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import { NavHashLink as NavLink } from 'react-router-hash-link';
import { makeStyles } from '@material-ui/core/styles';
import Typewriter from "typewriter-effect";

import './Landing.css';
import { ThemeContext } from '../../contexts/ThemeContext';
import { headerData } from '../../data/headerData';
import { socialsData } from '../../data/socialsData';

import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
} from "react-icons/fa";

function Landing() {
    const { theme, drawerOpen } = useContext(ThemeContext);

    const useStyles = makeStyles((t) => ({
      socialIcon: {
        color: "#444",
      },
      resumeBtn: {
        color: theme.primary,
        borderRadius: "30px",
        textTransform: "inherit",
        textDecoration: "none",
        width: "150px",
        fontSize: "1rem",
        fontWeight: "500",
        height: "50px",
        fontFamily: "var(--primaryFont)",
        border: `3px solid ${theme.primary}`,
        transition: "100ms ease-out",
        "&:hover": {
          backgroundColor: theme.tertiary,
          color: theme.secondary,
          border: `3px solid ${theme.tertiary}`,
        },
        [t.breakpoints.down("sm")]: {
          width: "180px",
        },
      },
      contactBtn: {
        backgroundColor: theme.primary,
        color: theme.secondary,
        borderRadius: "30px",
        textTransform: "inherit",
        textDecoration: "none",
        width: "150px",
        height: "50px",
        fontSize: "1rem",
        fontWeight: "500",
        fontFamily: "var(--primaryFont)",
        border: `3px solid ${theme.primary}`,
        transition: "100ms ease-out",
        "&:hover": {
          backgroundColor: theme.secondary,
          color: theme.tertiary,
          border: `3px solid ${theme.tertiary}`,
        },
        [t.breakpoints.down("sm")]: {
          display: "none",
        },
      },
    }));

    const classes = useStyles();

    return (
      <div className="landing">
        <div className="landing--container">
          <div
            className="landing--container-left"
            style={{ backgroundColor: theme.primary }}
          >
            <div className="lcl--content">
              {socialsData.twitter && (
                <a
                  href={socialsData.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.socialIcon} twitter`}
                >
                  <FaTwitter aria-label="Twitter" className="landing--social" />
                </a>
              )}
              {socialsData.github && (
                <a
                  href={socialsData.github}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.socialIcon} github`}
                >
                  <FaGithub aria-label="GitHub" className="landing--social" />
                </a>
              )}
              {socialsData.linkedIn && (
                <a
                  href={socialsData.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.socialIcon} linkedin`}
                >
                  <FaLinkedinIn
                    aria-label="LinkedIn"
                    className="landing--social"
                  />
                </a>
              )}
              {socialsData.instagram && (
                <a
                  href={socialsData.instagram}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.socialIcon} instagram`}
                >
                  <FaInstagram
                    aria-label="Instagram"
                    className="landing--social"
                  />
                </a>
              )}
              {socialsData.blogger && (
                <a
                  href={socialsData.blogger}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.socialIcon} blogger`}
                >
                  <FaBloggerB
                    aria-label="Blogger"
                    className="landing--social"
                  />
                </a>
              )}
              {socialsData.youtube && (
                <a
                  href={socialsData.youtube}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.socialIcon} youtube`}
                >
                  <FaYoutube aria-label="YouTube" className="landing--social" />
                </a>
              )}
              {/* {socialsData.reddit && (
                                <a
                                    href={socialsData.reddit}
                                    target='_blank'
                                    rel='noreferrer'
                                    className={classes.socialIcon}
                                >
                                    <FaRedditAlien aria-label='Reddit' />
                                </a>
                            )} */}
              {socialsData.stackOverflow && (
                <a
                  href={socialsData.stackOverflow}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.socialIcon} stackOverflow`}
                >
                  <FaStackOverflow
                    aria-label="Stack Overflow"
                    className="landing--social"
                  />
                </a>
              )}
              {socialsData.codepen && (
                <a
                  href={socialsData.codepen}
                  target="_blank"
                  rel="noreferrer"
                  className={`${classes.socialIcon} codepen`}
                >
                  <FaCodepen aria-label="CodePen" className="landing--social" />
                </a>
              )}
            </div>
          </div>
          <img
            src={headerData.image}
            alt=""
            className="landing--img"
            style={{
              opacity: `${drawerOpen ? "0" : "1"}`,
              borderColor: theme.secondary,
            }}
          />
          <div
            className="landing--container-right"
            style={{ backgroundColor: theme.secondary }}
          >
            <div className="lcr--content" style={{ color: theme.tertiary }}>
              <h6>
                <Typewriter
                  options={{
                    strings: [
                      "Full-Stack Web Developer",
                      "Designer",
                      "Writer"
                    ],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 60,
                  }}
                />
              </h6>
              <h1 style={{ fontSize: "40px" }}>{headerData.name}</h1>
              <p>{headerData.desciption}</p>

              <div className="lcr-buttonContainer">
                {headerData.resumePdf && (
                  <a
                    href={headerData.resumePdf}
                    download="resume"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Button className={classes.resumeBtn}>Download CV</Button>
                  </a>
                )}
                <NavLink
                  to="/#contacts"
                  smooth={true}
                  spy="true"
                  duration={2000}
                >
                  <Button className={classes.contactBtn}>Contact</Button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Landing;
