import React from "react";

import { Switch, Route } from "react-router-dom";


import Header from "./components/Header"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"

import Events from "./components/Events"
import HomeBodyContent from "./components/HomeBodyContent"
import Motto from "./components/Motto";
import Upcoming from "./components/Upcoming";

import logo from "../../assets/sk.png"

function Home() {

  return (
    <>
          <div className="pusher">
            <Header />
            <HomeBodyContent />
            <Motto />
            <Upcoming />
            <SocialMedia />
            <Footer />
          </div>
    </>
  );
}

export default Home;
