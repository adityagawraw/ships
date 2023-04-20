import React from "react";
import classes from "./Main.module.css";
import Cards1 from "./components/Cards1";
import Cards2 from "./components/Cards2";
const MainSection = () => {
  return (
    <div>
      <div className={classes.mainSection}>
        <Cards1 />
        <Cards1 />
        <Cards1 />
        <Cards1 />
        <Cards1 />
        <Cards1 />
      </div>
      <div className="flex justify-center my-5">
        <button className="px-2 py-1 border border-gray-700 bg-white rounded-3xl">
          Load More
        </button>
      </div>
      {/* <div>
        <Cards2/>
      </div> */}
    </div>
  );
};

export default MainSection;
