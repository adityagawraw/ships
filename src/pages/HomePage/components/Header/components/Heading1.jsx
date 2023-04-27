import React from "react";
import classes from "../Header.module.css";
import { Link } from "react-router-dom";
const Heading1 = ({ data }) => {
  return (
    <Link to={'/blog'}>
    <div
      className={` max-h-[430px] rounded-xl relative border border-gray-700 px-4 py-5`}
      style={{ backgroundColor: data?.color }}
    >
      <img
        src={data?.image}
        alt=""
        className="rounded-lg border border-gray-700 object-cover max-w-[100%] max-h-[400px]"
      />
      <div className={classes.headerContent}>
        <div className="flex justify-end w-full">
          <div className="hover:shadow-sm hover:shadow-slate-900  mt-2 mr-3 border bg-white border-gray-700 flex justify-end items-center cursor-default rounded-full ">
            <div
              style={{ backgroundColor: data?.tagColor }}
              className="w-2 h-2 mr-2 rounded-full bg-white ml-3"
            ></div>
            <span className=" text-gray-700 pr-3">{data?.category}</span>
          </div>
        </div>
        <div className="text-white px-3 mb-4">
          <p className="font-semibold text-2xl"> {data.heading} </p>
          <div className="flex items-center text-gray-200">
            <p className= "  font-semibold py-2"> Don Jones </p>
            <div className="w-2 h-2 rounded bg-gray-200 mt-1 mx-4"></div>
            <span className="font-semibold py-2">
              Dec 2 , 2023
            </span>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default Heading1;
