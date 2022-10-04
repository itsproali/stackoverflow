import React from "react";
import "./Loading.css"

const Loading = () => {
  return (
    <div className="loading-container bg-opacity-50 backdrop-blur-md">
      <div className="spinner">
        <div className="circle one"></div>
        <div className="circle two"></div>
        <div className="circle three"></div>
      </div>
    </div>
  );
};

export default Loading;
