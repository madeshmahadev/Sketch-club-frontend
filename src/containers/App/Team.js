import React from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"
import Nav from './components/Nav'

import logo from "../../assets/sk.png"

import Shravan from "../../assets/avatar/mahadev.png"
import Praveen from "../../assets/avatar/praveen.jpg"
import Mahadev from "../../assets/avatar/shravan.jpg"
import Shreya from "../../assets/avatar/shreya.png"
import Krishnan from "../../assets/avatar/krishnan.jpg"
import Vinaya from "../../assets/avatar/vinaya.png"
import Giri from "../../assets/avatar/giri.jpg"
import Bharat from "../../assets/avatar/bharat.jpg"
import Gobind from "../../assets/avatar/gobind.jpg"

function Team() {

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
              <h1 className="ui header">Our Team</h1>
              <p className="about-us-p"> We, at Sketch, have on our sleeves the expertise of graphic designing, web development, content writing, UI & UX and marketing. As we grow, our dedication to building an exceptional experience for our members is all we look forward to.</p>
            </div>
          </div>

          <div className="ui text container"  style={{marginBottom: "5rem"}}>
              <div class="ui three stackable cards team-cards">

                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Mahadev} />
                  </div>
                  <div class="content">
                    <a class="header">Madesh Mahadev</a>
                    <div class="meta">
                      <span class="date">President</span>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Praveen} />
                  </div>
                  <div class="content">
                    <a class="header">Praveen</a>
                    <div class="meta">
                      <span class="date">Communications	Chair.</span>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Shravan} />
                  </div>
                  <div class="content">
                    <a class="header">Shravan</a>
                    <div class="meta">
                      <span class="date">Event Chairperson</span>
                    </div>
                  </div>
                </div>


                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Shreya} />
                  </div>
                  <div class="content">
                    <a class="header">Shreya Vedha</a>
                    <div class="meta">
                      <span class="date">Student Secretary</span>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Krishnan} />
                  </div>
                  <div class="content">
                    <a class="header">Krishnan</a>
                    <div class="meta">
                      <span class="date">Head of R&D</span>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Vinaya} />
                  </div>
                  <div class="content">
                    <a class="header">Vinaya</a>
                    <div class="meta">
                      <span class="date">Treasurer</span>
                    </div>
                  </div>
                </div>


                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Giri} />
                  </div>
                  <div class="content">
                    <a class="header">Giridharan</a>
                    <div class="meta">
                      <span class="date">Head of Marketing</span>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Bharat} />
                  </div>
                  <div class="content">
                    <a class="header">Bharat Karthi</a>
                    <div class="meta">
                      <span class="date">Head of Photography</span>
                    </div>
                  </div>
                </div>
                <div class="card">
                  <div class="blurring dimmable image">
                    <div class="ui dimmer">
                      <div class="content">
                        <div class="center">
                          <div class="ui inverted button">Contact</div>
                        </div>
                      </div>
                    </div>
                    <img src={Gobind} />
                  </div>
                  <div class="content">
                    <a class="header">Gobind</a>
                    <div class="meta">
                      <span class="date">Executive Webmaster</span>
                    </div>
                  </div>
                </div>

              </div>
          </div>


            <SocialMedia />
            <Footer />
          </div>
    </>
  );
}

export default Team;
