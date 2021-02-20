import React, { Component } from "react";
import axios from "axios";
import qs from "qs";
import PropTypes from "prop-types"
import Nav from './components/Nav'
import Header from "./components/Header"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"


import logo from "../../assets/sk.png"


export default class Contact extends Component {

  constructor(props){
    super(props);
    this.state = {
      con_name: '',
	  con_email: '',
	  con_message: ''
    }
  }

	  handleChange = event => {
		this.setState({ [event.target.name] : event.target.value,  });
	  }


  handleSubmit = event => {
      event.preventDefault();
	  document.getElementById("contact-form").classList.add("loading");

	  var data = qs.stringify({
		'con_name': this.state.con_name ,
		'con_email': this.state.con_email ,
		'con_message': this.state.con_message
		});

		var config = {
		  method: 'post',
		  url: 'https://sketchclub.herokuapp.com/contacts',
		  headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		  },
		  data : data
		};

		axios(config)
			.then(function (response) {
				document.getElementById("contact-form").classList.remove("loading");
				document.getElementById("success-message").classList.remove("hidden");
			})
			.catch(function (error) {
				document.getElementById("contact-form").classList.remove("loading");
			    document.getElementById("error-message").classList.remove("hidden");
			});
  }

  render() {
	const { con_name, con_email, con_message } = this.state;
	return (
    <>
          <div className="pusher">

          <div className="ui inverted vertical masthead center aligned segment" style={{background:"unset", minHeight: "fit-content", marginBottom: "3rem"}}>
            <Nav />
            <div className="ui text container">
              <h1 className="ui header">Feel Free to Contact Us.</h1>
              <p className="about-us-p">We are a Technical and Design Club of SRM IST Ramapuram, that conducts various workshops, technical events and mentorship programmes for students and members.</p>

			  	<div className="ui hidden success message" id="success-message">
				  <div className="header">
					Your query has been submitted successfully.
				  </div>
				  <p>Our members will reach out to you to solve your query.</p>
				</div>

				<div class="ui hidden  negative message" id="error-message">
				  <div class="header">
					Something gone wrong.
				  </div>
				  <p>We are sorry for the inconvenience, please do not hesitate to mail us at <a href="mailto:sketch.srm@gmail.com">sketch.srm@gmail.com</a>
				</p></div>

            </div>


          </div>



          <div className="ui text container" style={{marginBottom: "5rem"}}>
            <form className="ui  form" onSubmit={this.handleSubmit} id="contact-form">
              <div class="field">
                <label>Full Name</label>
                <input type="text" name="con_name" onChange={this.handleChange} placeholder="First Name"  required />
              </div>
              <div class="field">
                <label>Email Address</label>
                <input type="email" name="con_email" onChange={this.handleChange} placeholder="Email Address" required />
              </div>
              <div class="field">
                <label>Message</label>
                <textarea placeholder="Type your message" name="con_message" onChange={this.handleChange} required></textarea>
              </div>
              <button class="ui huge button" type="submit">Submit</button>
            </form>
          </div>


            <SocialMedia />
            <Footer />
          </div>
    </>
  );
}
}
