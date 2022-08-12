/**
 *  LoadingScreen.js
 *  Loading spinner component
 */

import "./LoadingStyles.css";
import React from "react";

function LoadingScreen() {
  return (
    <div className="spinner-bg">
      <div className="small-spinner spinner">
        <div className="double-bounce1" />
        <div className="double-bounce2" />
      </div>
    </div>
  );
}

export default LoadingScreen;
