import React from "react";

const ScrollToTop = () => {
  return (
    <div>
      <h1>Hello, world!</h1>
      <div style={{ marginTop: "150vh" }} />
      <ScrollToTop smooth />
    </div>
  );
};

export default ScrollToTop;
