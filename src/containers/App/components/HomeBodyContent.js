import React from "react";


import thumb from "../../../assets/youtube-thumbnail-image.jpg"

function HomeBodyContent() {
  return (

    <div className="ui vertical stripe segment">
      <div className="ui middle aligned stackable grid container">
        <div className="row">
          <div className="eight wide column">
            <h3 className="ui header">We are on a mission to get our student community to do design thinking</h3>
            <p>
              Sketch Club is a Technical and Design Club of SRM IST Ramapuram, that conducts various workshops, technical events and mentorship programmes for students and members.
            </p>
          </div>
          <div className="six wide right floated column">
              <img className="ui medium rounded image" src={thumb} />
          </div>
        </div>
        <div className="row">
          <div className="left aligned column">
            <a href="/about-us" className="ui huge button">Know more about us <i className="right arrow icon"></i></a>
          </div>
        </div>
      </div>
    </div>



  );
}

export default HomeBodyContent;
