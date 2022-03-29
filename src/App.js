import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';

import { ThemeContext } from './contexts/ThemeContext';
import { Main, BlogPage, ProjectPage, PortfolioPage, Brand } from "./pages";
import { BackToTop } from './components';
import ScrollToTop from './utils/ScrollToTop';

import './App.css'

function App() {

  const { theme } = useContext(ThemeContext);

  console.log("%cDEVELOPER PORTFOLIO", `color:${theme.primary}; font-size:50px`);
  console.log(
    "%chttps://github.com/Programing-School/developer-portfolio",
    `color:${theme.tertiary}; font-size:20px`
  );
  // console.log = console.warn = console.error = () => {};

  return (
    <div className="app">
      <Router>
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Main} />
          <Route path="/blog" exact component={BlogPage} />
          <Route path="/projects" exact component={ProjectPage} />
          <Route path="/portfolio" exact component={PortfolioPage} />
          <Route path="/brand" exact component={Brand} />

          <Redirect to="/" />
        </Switch>
      </Router>
      <BackToTop />
    </div>
  );
}

export default App;
