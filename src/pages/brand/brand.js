import React, { useContext } from "react";
import { Helmet } from "react-helmet";
// import { Grid } from "@material-ui/core";

import Logo from "../../assets/png/Logo.png";
import LogoOne from "../../assets/svg/MonoLogo.svg";
import MonoLogo from "../../assets/svg/Logo.svg";
import Download from "../../assets/ZIP/Programming-School Logo.rar";
import "./brand.css";
import { Navbar } from "../../components";
import { ThemeContext } from "../../contexts/ThemeContext";
import { headerData } from "../../data/headerData";

const brand = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <Helmet>
        <title>{headerData.name} - Brand</title>
      </Helmet>
      <Navbar />
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <h1 style={{ color: theme.secondary }}>Brand</h1>
      </div>
      <div className="Main">
        <section className="header">
          <h1>Logo</h1>
          <p>
            The Programming School logo is the central visual cue to identify
            Programming and its official resources, community projects.
            Everywhere Programming logo shows up, it should act and behave the
            same.
          </p>
        </section>
        <section className="Main-Section">
          <div className="right">
            <img src={Logo} className="logo" alt="Logo" />
            <p className="main-p">
              Programming-School’s logo was created by Mohamed Ehab in late
              2022, and is a true open source community effort. 💜🙏 Check out
              the footnotes to retrace the most important iteration steps.
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={Download}
              class="download"
              download
            >
              Download all logo assets
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
              </svg>
            </a>
            <span>
              Contains JPG, PNG, PDF, and SVG files v1.0, Feb. 30, 2022
            </span>
            <p className="hurry">In a hurry? Here’s just the SVGs:</p>
            <a className="default-a lo" href={LogoOne} download>
              Logo SVG
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
              </svg>
            </a>
            <a className="default-a mono" href={MonoLogo} download>
              Monogram SVG
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M20 12l-1.41-1.41L13 16.17V4h-2v12.17l-5.58-5.59L4 12l8 8 8-8z"></path>
              </svg>
            </a>
          </div>
          <div class="Left">
            <div class="css-14i2f0m">
              <p>
                Because Programming-School <em>is and always will be free</em>{" "}
                open source Channel, but also is backed by Programming-School
                the company, this guide is relevant not only for internal use,
                but also for our community members and commercial partners.
              </p>
              <p>
                Whether you want to reference Programming-School in your
                publication or service, show some love or link back to us, we
                hope this page contains everything you need.
              </p>
              <div class="css-ut6w89">
                Please{" "}
                <a href="https://github.com/Programing-School/developer-portfolio/issues">
                  open an issue
                </a>{" "}
                on GitHub or{" "}
                <a href="mailto:mohamed9919698@gmail.com">send a mail</a> to the
                Programming School Inkteam if you have any questions,
                suggestions, or problems About Programming!{" "}
                <strong>Happy shipping!</strong>
              </div>
            </div>
          </div>
        </section>
        <section class="css-1bctdj3" id="guidance">
          <div class="css-4283st">
            <div class="css-6emej0">
              <div class="css-1k3eugf">
                <h2 class="css-9d112q eufwu22">Do these awesome things</h2>
                <ul class="css-eu0b04">
                  <li class="css-kswqoj">
                    Use the Gatsby logo or monogram to link to Programming-School Channel
                  </li>
                </ul>
              </div>
            </div>
            <div class="css-atr8a2">
              <h2 id="donts" class="css-9d112q eufwu22">
                Please don’t do these things
              </h2>
              <ul class="css-eu0b04">
                <li class="css-134831w">
                  Use the Programming-School logo or monogram for your application’s icon
                </li>
                <li class="css-134831w">
                  Create a modified version of the Programming-School logo or monogram,
                  change the colors, dimensions or add your own text/images
                </li>
                <li class="css-134831w">
                  Integrate the Programming-School logo or monogram into your logo
                </li>
                <li class="css-134831w">
                  Sell any Programming-School artwork without permission
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default brand;
