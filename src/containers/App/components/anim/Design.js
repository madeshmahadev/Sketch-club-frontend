import React from "react";
import Lottie from 'react-lottie';

import animationData from '../../../../assets/lottie/design'

export default function Design() {
  const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

  return (
    <div>
      <Lottie
	    options={defaultOptions}
        height="auto"
        width="auto"
      />
    </div>
  );
}
