import React from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"
import Nav from './components/Nav'
import Hamburger from './components/Hamburger'

import logo from "../../assets/sk.png"

import Shravan from "../../assets/avatar/shravan.jpg"
import Praveen from "../../assets/avatar/praveen.jpg"
import Mahadev from "../../assets/avatar/mahadev.png"
import Shreya from "../../assets/avatar/shreya.jpeg"
import Krishnan from "../../assets/avatar/tarak.jpg"
import Vinaya from "../../assets/avatar/vinaya.jpg"
import Giri from "../../assets/avatar/giri.jpg"
import Bharat from "../../assets/avatar/bharat.JPG"
import Gobind from "../../assets/avatar/gobind.jpg"

function Team() {

  return (
    <>
		
		  
          <div className="pusher">

          <div className="ui inverted vertical masthead center aligned segment" style={{background:"unset", minHeight: "fit-content", marginBottom: "3rem"}}>
              <Nav />
            <div className="ui text container">
              <h1 className="ui header">Our Team</h1>
              <p className="about-us-p"> We, at Sketch, have on our sleeves the expertise of graphic designing, web development, content writing, UI & UX and marketing. As we grow, our dedication to building an exceptional experience for our members is all we look forward to.</p>
            </div>
          </div>

          <div className="ui text container"  style={{marginBottom: "5rem"}}>
              <div className="ui three stackable cards team-cards">

                <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/madeshmahadev/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
	                </div>
                      </div>
                    </div>
                    <img src={Mahadev} />
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/madeshmahadev/" target="_blank">Madesh Mahadev</a>
                    <div className="meta">
                      <span className="date">President</span>
                    </div>
                  </div>
                </div>
	     
	        <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/srmsketch/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
                        </div>
                      </div>
                    </div>
                    <img src={Shreya} />
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/srmsketch/" target="_blank">Shreya Vedha</a>
	            <div className="meta">
	              <span className="date">Secretary,</span>
                    </div>
                    <div className="meta">
                      <span className="date">Content Manager </span>
                    </div>
                  </div>
                </div>
	  
                <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/cuckuduku/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
                        </div>
                      </div>
                    </div>
                    <img src={Praveen} />
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/cuckuduku/" target="_blank">Praveen</a>
                    <div className="meta">
	              <span className="date">Event Chairperson,</span>
                    </div>
                    <div className="meta">
                      <span className="date">Design Manager</span>
                    </div>
                  </div>
                </div>
	  
	        
	  
                <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/shravan_2000/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
                        </div>
                      </div>
                    </div>
                    <img src={Shravan}/>
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/shravan_2000/" target="_blank">Shravan</a>
                    <div className="meta">
	              <span className="date">Executive Chairperson,</span>
                    </div>
                    <div className="meta">
                      <span className="date">Organizing Manager</span>
                    </div>
                  </div>
                </div>


                
                <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/tarakeswar.n/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
                        </div>
                      </div>
                    </div>
                    <img src={Krishnan} />
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/tarakeswar.n/" target="_blank">Tarak</a>
                    <div className="meta">
                      <span className="date">R&D Manager</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/_vinn._/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
                        </div>
                      </div>
                    </div>
                    <img src={Vinaya} />
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/_vinn._/" target="_blank">Vinaya</a>
                    <div className="meta">
                      <span className="date">Treasurer</span>
                    </div>
                  </div>
                </div>


                <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/im_d_haran/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
                        </div>
                      </div>
                    </div>
                    <img src={Giri} />
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/im_d_haran/" target="_blank">Giridharan</a>
                    <div className="meta">
                      <span className="date">Marketing Manager</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/kiddoo_boy/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
                        </div>
                      </div>
                    </div>
                    <img src= {Bharat} />
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/kiddoo_boy/" target="_blank">Yogesh Waran</a>
                    <div className="meta">
                      <span className="date">Media Co-Manager</span>
                    </div>
                  </div>
                </div>
                <div className="card">
                  <div className="blurring dimmable image">
                    <div className="ui dimmer">
                      <div className="content">
                        <div className="center">
                          <div className="ui icon header">
                    		<a className="social-media-link" href="https://www.instagram.com/thegobindsingh/" target="_blank"><i className="instagram icon"></i></a>
                  	  </div>
                        </div>
                      </div>
                    </div>
                    <img src={Gobind} />
                  </div>
                  <div className="content">
                    <a className="header" href="https://www.instagram.com/thegobindsingh/" target="_blank">Gobind Singh</a>
                    <div className="meta">
                      <span className="date">Student Coordinator,</span>
                    </div>
	  		<div className="meta">
	  		<span className="date">Media Co-Manager,</span>
                    </div>
	  		<div className="meta">
	  		<span className="date">R&D Sub-Manager</span>
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
