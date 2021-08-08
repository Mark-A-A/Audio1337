import React from "react";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";

import { getListOfEpisodesFromStore } from 'ReduxStore/selectors'
import { Home } from "Pages/Home/Home";
import { PodcastEpisode } from "Pages/PodcastEpisode/PodcastEpisode";

import { NavBar } from "./NavBar/NavBar";
export default function Navigation() {
  const { list } = useSelector(getListOfEpisodesFromStore)
  return (
    <Router>
      <div className="Navigation">
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/episode/:id">
            {
              !list.length 
              ? <Redirect to="/" /> 
              : <PodcastEpisode />
            }
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
