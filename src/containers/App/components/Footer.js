import React from "react";

import logo from "../../../assets/sk.png"

function Footer() {
  return (
    <div className="ui inverted vertical footer segment">
      <div className="ui container">
        <div className="ui stackable inverted divided equal height stackable grid" >
          <div className="three wide column">
            <h4 className="ui inverted header">Sitemap</h4>
            <div className="ui inverted link list">
              <a className="item" href="/">Home</a>
              <a className="item" href="/about-us">About Us</a>
              <a className="item" href="/events">Our Events</a>
            </div>
          </div>
          <div className="three wide column">
            <h4 className="ui inverted header">Get in touch</h4>
            <div className="ui inverted link list">
              <a className="item" href="/team">Our Team</a>
              <a className="item" href="/join-us">Join Us</a>
              <a className="item" href="/contact-us">Contact Us</a>
            </div>
          </div>
          <div className="seven wide column">
            <div className="ui inverted header"><img src={logo} style={{ width: "4.5em"}} /></div>
            <p style={{color:"black"}}>
              We are a community made to encourage our students to build their own profile and help them lead their own entrepreneurial organizations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
