import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
// import Post from "./pages/Post";
import Dashboard from "./pages/Dashboard";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Dashboard}></Route>
      </Switch>
    </BrowserRouter>
  );
}
