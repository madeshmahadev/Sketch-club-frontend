import React from "react";
import Lottie from 'react-lottie';

import animationData from '../../../../assets/lottie/deliver'

export default function Deliver() {
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
