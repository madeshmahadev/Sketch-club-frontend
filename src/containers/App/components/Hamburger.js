import React from "react";
import logo from "../../../assets/sk.png"


function Hamburger() {
  return (

	 <div className="ui right vertical inverted sidebar labeled icon menu">
		  <a className="item" href="/">
			<i className="home icon"></i>
			Home
		  </a>
		  <a className="item" href="/events">
			<i className="block layout icon"></i>
			Events
		  </a>
		  <a className="item" href="/about-us">
			<i className="star icon"></i>
			About
		  </a>
		  <a className="item" href="/team">
			<i className="users icon"></i>
			Team
		  </a>
		  <a className="item" href="/join-us">
			<i className="user plus icon"></i>
			Join us
		  </a>
		  <a className="item" href="/contact-us">
			<i className="smile icon"></i>
			Contact
		  </a>
	</div>

  );
}

export default Hamburger;
