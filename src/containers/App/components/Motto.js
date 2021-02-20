import React from "react";
import Lottie from 'react-lottie';

import Design from './anim/Design'
import Develop from './anim/Develop'
import Deliver from './anim/Deliver'


function Motto() {
  return (
    <div className="ui vertical stripe segment">
      <h1 className="ui center aligned horizontal header">
        Our Workshops & Events Empower You to
      </h1>
      <div className="ui three column doubling stackable grid container">
        <div className="column">
          <Design />
          <h2 className="ui center aligned header motto massive label">
            Design<span className="ui yellow circular label"></span>
          </h2>
        </div>
        <div className="column">
          <Develop />
          <h2 className="ui center aligned  header motto massive label">
            Develop<span className="ui teal circular label"></span>
          </h2>
        </div>
        <div className="column">
          <Deliver />
          <h2 className="ui center aligned header motto massive label">
            Deliver<span className="ui blue circular label"></span>
          </h2>
        </div>
      </div>
    </div>
  );
}

export default Motto;
