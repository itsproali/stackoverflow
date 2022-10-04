import React from "react";
import ScrollToTop from "react-scroll-to-top";
import { MdOutlineVerticalAlignTop } from "react-icons/md";

const GoTop = () => {
  return (
    <div>
      <ScrollToTop
        component={
          <MdOutlineVerticalAlignTop className="text-white text-2xl" />
        }
        style={{
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#f48023",
        }}
        smooth
      />
    </div>
  );
};

export default GoTop;
