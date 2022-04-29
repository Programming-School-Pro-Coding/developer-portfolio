import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Singleportfolio } from "../../components";
import { Helmet } from "react-helmet";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";

import "./portfolio.css";
import { ThemeContext } from "../../contexts/ThemeContext";
import { portfolioData } from "../../data/portfolioData";
import { socialsData } from "../../data/socialsData";
import { headerData } from "../../data/headerData";

function PortfolioPage() {
  const [search, setSearch] = useState("");
  const { theme } = useContext(ThemeContext);

  const filteredArticles = portfolioData.filter((portfolio) => {
    const content = portfolio.title + portfolio.description + portfolio.source;
    return content.toLowerCase().includes(search.toLowerCase());
  });

  const useStyles = makeStyles((t) => ({
    search: {
      color: theme.tertiary,
      width: "40%",
      height: "2.75rem",
      outline: "none",
      border: "none",
      borderRadius: "20px",
      padding: "0.95rem 1rem",
      fontFamily: "'Noto Sans TC', sans-serif",
      fontWeight: 500,
      fontSize: "0.9rem",
      backgroundColor: theme.secondary,
      boxShadow:
        theme.type === "dark"
          ? "inset 3px 3px 6px #ffffff10, inset -3px -3px 6px #00000060"
          : "inset 3px 3px 6px #ffffffbd, inset -3px -3px 6px #00000030",
      "&::placeholder": {
        color: theme.tertiary80,
      },
      [t.breakpoints.down("sm")]: {
        width: "350px",
      },
    },
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

  const classes = useStyles();

  return (
    <div className="blogPage" style={{ backgroundColor: theme.secondary }}>
      <Helmet>
        <title>{headerData.name} | Websites</title>
      </Helmet>
      <div
        className="blogPage--header"
        style={{ backgroundColor: theme.primary }}
      >
        <Link to="/">
          <AiOutlineHome className={classes.home} />
        </Link>
        <h1 style={{ color: theme.secondary }}>Templates</h1>
        <a style={{ color: theme.secondary }} class="about-a" href={socialsData.github} target="_blank" rel="noreferrer">My Github</a>
      </div>
      <div className="blogPage--container">
        <div className="blog--search">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search websites..."
            className={classes.search}
          />
        </div>
        <div className="blogs--container">
          <Grid
            className="blog-grid"
            container
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            {filteredArticles.reverse().map((portfolio) => (
              <Singleportfolio
                theme={theme}
                title={portfolio.title}
                desc={portfolio.description}
                image={portfolio.image}
                url={portfolio.url}
                key={portfolio.id}
                id={portfolio.id}
                source={portfolio.source}
              />
            ))}
          </Grid>
        </div>
      </div>
    </div>
  );
}

export default PortfolioPage;
