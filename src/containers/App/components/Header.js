import React from "react";
import Nav from './Nav'


function Header() {
  return (

    <div className="ui inverted vertical masthead center aligned segment">
      <Nav />
      <div className="ui text container">
        <h1 className="ui inverted header">We help our student community to rethink imagination, the perspective of choice and the complexity of decision through our workshops & events.</h1>
        <a href="/about-us">
          <div className="ui huge primary button">
            Explore Us <i className="right arrow icon"></i>
          </div>
        </a>
      </div>
    </div>

  );
}

export default Header;
