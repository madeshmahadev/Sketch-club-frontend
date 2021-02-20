import React from "react";
import logo from "../../../assets/sk.png"

import Hamburger from './Hamburger'

import ScriptTag from 'react-script-tag';




function Nav() {
  return (
	<>	
	<ScriptTag type="text/javascript" isHydrating={true} src="content.js" />
          <div className="ui inverted vertical masthead center aligned segment" style={{background:"unset", minHeight: "fit-content", marginBottom: "3rem"}}>
            <div className="ui container">
              <div className="ui large secondary inverted pointing menu">
               <div className="ui inverted header">
                <a href="/">  <img className="logo" src={logo} style={{ width: "8em", marginTop: "1.142857em"}} /> </a>
                </div>
                <div className="right item">
                  <a href="/events" className="ui inverted button">Our Events</a>
                  <a href="/join-us" className="ui inverted button">Join Us</a>
                  <a className="toc item"><i className="sidebar icon"></i></a>
                </div>
              </div>
            </div>
          </div>
		  <Hamburger />
	</>
  );
}

export default Nav;
