
import React from "react";

import Header from "./components/Header"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"

import Nav from './components/Nav'

import logo from "../../assets/sk.png"

import Design from './components/anim/Design'
import Develop from './components/anim/Develop'
import Deliver from './components/anim/Deliver'

function About() {
  return (
    <>
  
          <div className="pusher">

          <div className="ui inverted vertical masthead center aligned segment" style={{background:"unset", minHeight: "fit-content", marginBottom: "3rem"}}>
            <Nav />
            <div className="ui text container">
              <h1 className="ui header">We're Sketch!</h1>
              <p className="about-us-p">We are a Technical and Design Club of SRM IST Ramapuram, that conducts various workshops, technical events and mentorship programmes for students and members.</p>
              <p className="about-us-p">When Sketch was made, the idea was simple: to encourage our members to build their profile and help them lead their entrepreneurial organizations. We, at Sketch, have on our sleeves the expertise of graphic designing, web development, content writing, UI & UX and marketing. As we grow, our dedication to building an exceptional experience for our members is all we look forward to.</p>
              <a href="/join-us" ><div className="ui huge primary button">
                Join our team <i className="right arrow icon"></i>
              </div></a>
            </div>
          </div>


          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header">Design.</h3>
                  <p style={{textAlign:"justify"}}>
                    We are on a mission to get our student community to do design thinking, by conducting workshops and contests for students to be around like-minded individuals who are passionate about designing. We not only teach graphic designing but also introduce our fellow juniors to UI (User Interface) / UX (User Experience) designing by mentoring them on how the importance of UI and UX Design becomes more crucial as the first impression and brand recognition from small startups to giant technology firms, with the help of open-sourced UI/UX design and collaboration tools.
                  </p>
                </div>
                <div className="six wide right floated column">
                    <Design />
                </div>
              </div>
            </div>
          </div>

          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="six wide right floated column">
                      <Develop />
                </div>
                <div className="eight wide column">
                  <h3 className="ui header">Develop.</h3>
                  <p style={{textAlign:"justify"}}>
                    We organize hands-on workshops and challenging contests on various web and software tools and technologies for our fellow students. We help them to grow their knowledge in a peer-to-peer learning environment and gain them the roadmap to build solutions for present and future problem-solving. We empower our club members to be hosts and support them in organizing workshops. We also partner with technology firms, startups and other student communities to organize workshops.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="ui vertical stripe segment">
            <div className="ui middle aligned stackable grid container">
              <div className="row">
                <div className="eight wide column">
                  <h3 className="ui header">Deliver.</h3>
                  <p style={{textAlign:"justify"}}>
                    We engage our student community to deliver their creativity and knowledge by associating them with our college's cultural fests and hackathons. We encourage our members to transform their ideas and innovations into startups by connecting them with our Alumnus who has established their startups. Our club has five startups of its own.
                  </p>
                </div>
                <div className="six wide right floated column">
                      <Deliver />
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

export default About;
