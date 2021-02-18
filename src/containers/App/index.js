import React from "react";

import { Switch, Route } from "react-router-dom";

import Nav from "../../components/Nav";
import Articles from "../Articles";
import Article from "../Article";
import Category from "../Category";

import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import Join from "./Join";
import Events from "./Events";
import Team from "./Team";


import logo from "../../assets/sk.png"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/about-us" component={About} exact />
        <Route path="/events" component={Events} exact />
        <Route path="/contact-us" component={Contact} exact />
        <Route path="/join-us" component={Join} exact />
        <Route path="/team" component={Team} exact />

        <Route path="/events/:id" component={Article} exact />
        <Route path="/category/:id" component={Category} exact />
      </Switch>
    </div>
  );
}

export default App;
