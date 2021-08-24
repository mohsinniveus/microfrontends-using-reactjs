import React, { useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createBrowserHistory } from "history";
import MicroFrontend from "./MicroFrontend";

import "./App.css";

const defaultHistory = createBrowserHistory();

const {
  REACT_APP_HEADER_HOST: headerHost,
  REACT_APP_BLOGS_HOST: blogHost,
  REACT_APP_REPOS_HOST: repoHost,
} = process.env;

function Header({ history }) {
  return <MicroFrontend history={history} host={headerHost} name="Header" />;
}

function Blogs({ history }) {
  return <MicroFrontend history={history} host={blogHost} name="Blogs" />;
}

function Repos({ history }) {
  return <MicroFrontend history={history} host={repoHost} name="Repos" />;
}

function BlogDetail({history}) {
  return (
    <div>
      <MicroFrontend history={history} host={blogHost} name="Blogs" />
    </div>
  );
}


function Home({ history }) {

  return (
    <div className="container">
       <Header />
       <Repos />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/blogdetail/:blogid" component={BlogDetail} />
        </Switch>
      </React.Fragment>
    </BrowserRouter>
  );
}

export default App;
