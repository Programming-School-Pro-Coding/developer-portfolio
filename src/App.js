import React, { useContext, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Giscus from "@giscus/react";
import { MdClose } from "react-icons/md";

import { ThemeContext } from "./contexts/ThemeContext";
import { Main, BlogPage, ProjectPage, PortfolioPage, NotFound } from "./pages";
import { BackToTop, Twitter, ChatIcon } from "./components";
import ScrollToTop from "./utils/ScrollToTop";

import "./App.css";

function App() {
  const { theme } = useContext(ThemeContext);
  const [showComment, setShowComment] = useState(false);

  console.log(
    "%cDEVELOPER PORTFOLIO",
    `color:${theme.primary}; font-size:50px`
  );
  console.log(
    "%chttps://github.com/Programing-School/developer-portfolio",
    `color:${theme.tertiary}; font-size:20px`
  );
  console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route path="/404" exact component={NotFound} />

          <Redirect to="/404" />
        </Switch>
      </Router>
      <BackToTop />
      <Twitter />
      {<ChatIcon onclickfunc={() => setShowComment(true)} />}
      {showComment && (
        <div className="play-details-comments">
          <div className="comments-header">
            <h3 className="header-title">Comments</h3>
            <button
              className="header-action"
              onClick={() => setShowComment(false)}
            >
              <MdClose size={24} className="icon" />
            </button>
          </div>
          <div className="comments-body">
            <Giscus
              id="comment-id"
              repo={process.env.REACT_APP_GISCUS_PROJECT_REPO}
              repoId={process.env.REACT_APP_GISCUS_PROJECT_REPO_ID}
              category={process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_NAME}
              categoryId={process.env.REACT_APP_GISCUS_DISCUSSION_CATEGORY_ID}
              mapping="Feedback for The Portfolio"
              reactionsEnabled="1"
              emitMetadata="0"
              inputPosition="top"
              theme="dark"
              lang="en"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
