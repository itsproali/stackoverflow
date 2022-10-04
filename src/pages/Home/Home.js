import React from "react";
import Jobs from "../Jobs/Jobs";
import Questions from "../Questions/Questions";

const Home = ({searchValue}) => {
  return (
    <div className="flex mx-4 justify-around">
      <Questions searchValue={searchValue} />
      <Jobs />
    </div>
  );
};

export default Home;
