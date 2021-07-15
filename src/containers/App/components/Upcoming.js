import React from "react";
import Articles from "../../Articles";

function Upcoming() {
  return (
    <div className="ui vertical stripe segment">
      <h1 className="ui center aligned horizontal  header ">
        Our Events<a class="ui teal empty circular label"></a><a class="ui blue empty circular label"></a><a class="ui blue empty circular label"></a>
      </h1>

      <Articles />

    </div>
  );
}

export default Upcoming;
