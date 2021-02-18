import React from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"
import Articles from "../Articles";
import SocialMedia from "./components/SocialMedia"
import Nav from './components/Nav'


import logo from "../../assets/sk.png"


function Events() {
  return (
    <>
          <div className="ui vertical inverted sidebar menu right">
            <a className="item">Home</a> <a className="item">About</a>
            <a className="item">Events</a> <a className="item">Contact</a>
            <a className="item">Join us</a>
          </div>

          <div className="pusher">

          <div className="ui inverted vertical masthead center aligned segment" style={{background:"unset", minHeight: "fit-content", marginBottom: "3rem"}}>
            <Nav />
            <div className="ui text container">
              <h1 className="ui header">Our Events</h1>
              <p className="about-us-p">We are a Technical and Design Club of SRM IST Ramapuram, that conducts various workshops, technical events and mentorship programmes for students and members.</p>
            </div>
          </div>

		        <Articles />

            <SocialMedia />
            <Footer />
          </div>
    </>
  );
}

export default Events;
