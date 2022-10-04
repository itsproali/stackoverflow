import React from "react";
import Jobs from "../Jobs/Jobs";
import Questions from "../Questions/Questions";

const Home = () => {
  return (
    <div className="flex mx-4 justify-around">
      <Questions />
      <Jobs />
    </div>
  );
};

export default Home;
