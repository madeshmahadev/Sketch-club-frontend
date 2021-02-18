import React, { Component } from "react";
import axios from "axios";
import qs from "qs";

import Header from "./components/Header"
import Footer from "./components/Footer"
import SocialMedia from "./components/SocialMedia"
import Nav from './components/Nav'

import logo from "../../assets/sk.png"


export default class Join extends Component {

  constructor(props){
    super(props);
    this.state = {
      firstname: '',
	  lastname: '',
	  emailaddress: '',
	  contactno: '',
	  team_int: '',
	  description: '',
    }
  }

	  handleChange = event => {
		this.setState({ [event.target.name] : event.target.value,  });
	  }


  handleSubmit = event => {
      event.preventDefault();
	  document.getElementById("join-form").classList.add("loading");

	  var data = qs.stringify({
		'firstname': this.state.firstname ,
		'lastname': this.state.lastname ,
		'emailaddress': this.state.emailaddress,
		'contactno': this.state.contactno ,
		'description': this.state.description,
		'team_int': this.state.team_int
		});

		var config = {
		  method: 'post',
		  url: 'http://localhost:1337/join-uses',
		  headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		  },
		  data : data
		};

		axios(config)
			.then(function (response) {
				document.getElementById("join-form").classList.remove("loading");
				document.getElementById("join-form").style.display = "none";
				document.getElementById("success-message").classList.remove("hidden");
			})
			.catch(function (error) {
				document.getElementById("join-form").classList.remove("loading");
			    document.getElementById("error-message").classList.remove("hidden");
			});
  }


	render() {
		const { firstname, lastname, emailaddress, contactno, team_int, description } = this.state;
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
              <h1 className="ui header">Be a Part of Our Family.</h1>
              <p className="about-us-p">We’re always on the lookout for awesome and creative minds to join our club to kick off your career. For a further look into who we are head to our <a href="/about-us" target="_blank">About page</a>. To send us your info fill out the form below. If you have any questions feel free to contact us.</p>
            </div>
          </div>

          <div className="ui text container" style={{marginBottom: "5rem"}}>

          <div class="ui info message" style={{marginBottom: "2rem"}}>
            <div class="header">
              Our Selection Process
            </div>
            <ul class="list">
              <li>Complete and submit the Registration Form</li>
              <li>Wait for a call or text about your Interview</li>
              <li>Perform well in the Interview (Chill! we would just ask your stories!)</li>
              <li>That's all it takes!</li>
            </ul>
          </div>

			<div className="ui text container" style={{marginBottom: "2rem"}}>
				<div class="ui hidden success message" id="success-message">
				  <div class="header">
					We cannot wait to see you!
				  </div>
				  <p>Your user registration was successful and you may now wait for a call or text about your Interview :)</p>
				</div>
				<div class="ui hidden negative message" id="error-message">
				  <div class="header">
					Something gone wrong!
				  </div>
				  <p>We're sorry! please do not hesitate to mail us at <a href="mailto:sketch.srm@gmail.com">sketch.srm@gmail.com</a>
				</p></div>
			</div>





            <form className="ui form" onSubmit={this.handleSubmit} id="join-form">
              <div class="field">
                <label>First Name</label>
                <input type="text" name="firstname" placeholder="First Name" onChange={this.handleChange} required />
              </div>
              <div class="field">
                <label>Last Name</label>
                <input type="text" name="lastname" placeholder="Last Name" onChange={this.handleChange} required />
              </div>
              <div class="field">
                <label>Email Address</label>
                <input type="text" name="emailaddress" placeholder="Email Address" onChange={this.handleChange} required />
              </div>
              <div class="field">
                <label>Contact</label>
                <input type="tel" name="contactno" placeholder="Phone Number" onChange={this.handleChange} required />
              </div>
              <div class="field">
                <label>Selet the team you are Interested</label>
                <select type="text" name="team_int" onChange={this.handleChange} required>
                    <option value="Graphic Design">Graphic Design</option>
                    <option value="Research & Development">Research & Development</option>
                    <option value="Photography">Photography</option>
                    <option value="Content Writing">Content Writing</option>
                    <option value="Marketing & Promotions">Marketing & Promotions</option>
                    <option value="Ambience Team">Ambience Team</option>
                </select>
              </div>
              <div class="field">
                <label>Tell us about yourself, why you want to join our club, and why this team.</label>
                <textarea placeholder="Please click to type here" name="description" onChange={this.handleChange} required></textarea>
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
