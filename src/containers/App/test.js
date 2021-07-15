
import React from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"

import Nav from './components/Nav'

import logo from "../../assets/sk.png"

import Design from './components/anim/Design'
import Develop from './components/anim/Develop'
import Deliver from './components/anim/Deliver'

function test() {
  return (
    <>
  
          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header">Design.</h3>
                  <p style={{textAlign:"justify"}}>
                    Coming Soon...
                  </p>
                </div>
                <div className="six wide right floated column">
                </div>
              </div>
            </div>
          </div>
    </>
  );
}

export default test;
