import React from "react";
import "./Loading.css"

const Loading = () => {
  return (
    <div className="loading-container bg-opacity-50 backdrop-blur-md">
      <div class="spinner">
        <div class="circle one"></div>
        <div class="circle two"></div>
        <div class="circle three"></div>
      </div>
    </div>
  );
};

export default Loading;
