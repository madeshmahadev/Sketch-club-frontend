import React from "react";

function SocialMedia() {
  return (
          <div className="ui placeholder segment" style={{margin: "unset"}}>
            <div className="ui two column stackable center aligned grid">
              <div className="ui vertical divider">Follow us</div>
              <div className="middle aligned row">
                <div className="column">
                  <div className="ui icon header">
                    <i className="envelope icon"></i>
                  </div>
                  <div className="field">
                      <a className="ui huge primary button" style={{maxWidth: "fit-content"}} href="mailto:sketch.srm@gmail.com">sketch.srm@gmail.com</a>
                  </div>
                </div>
                <div className="column">
                  <div className="ui icon header">
                    <a className="social-media-link" href="https://www.instagram.com/srmsketch/" target="_blank"><i className="instagram icon"></i></a>
                  </div>
                  <div className="ui icon header">
                    <a className="social-media-link" href="https://in.linkedin.com/company/sketch-srm" target="_blank"><i className="linkedin in icon"></i></a>
                  </div>
                  <div className="ui icon header">
                    <a className="social-media-link" href="https://www.youtube.com/channel/UCqI8MZ5R-Bz4ienOk2AmiUQ" target="_blank"><i className="youtube icon"></i></a>
                  </div>
                  <div className="ui icon header">
                    <a className="social-media-link" href="https://www.facebook.com/Srmsketch-109133297153536/" target="_blank"><i className="facebook icon"></i></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
  );
}

export default SocialMedia;
