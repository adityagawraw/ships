import React from "react";
import { Link } from "react-router-dom";
import imagesCategory from "../../../../components/imageCategory";
const Cards1 = ({blog, index}) => {
  return (
    <div className="justify-self-center rounded-lg max-w-[340px] max-h-[550px] px-2 py-2 border border-gray-700 my-2 bg-[#f0f0ff] cursor-default relative">
      <div>
        <Link to={`/blog/${blog?._id}`}>
          <img
            src={imagesCategory[ Math.floor(Math.random()*8)]}
            alt=""
            className="rounded-lg  object-cover w-[330px] h-[200px]"
          />
        </Link>
        <div className="absolute top-4 right-4 ">
          <div className="bg-white flex items-center rounded-3xl px-2 border border-gray-700">
            <div className="w-2 h-2 mr-2 rounded-full bg-black"></div>
            <p>{blog?.category?.charAt(0)?.toUpperCase() + blog?.category?.slice(1)}</p>
          </div>
        </div>
        <p className="text-xl text-center font-semibold text-gray-700 px-2 pt-2">
          {blog?.title}
        </p>
        <div className="flex items-center px-2 justify-center">
          <p>{blog?.author} </p>
          <div className="w-2 h-2 rounded bg-gray-700 mt-1 mx-2"></div>
          <p>Dec 12, 2023</p>
        </div>
        <p className="text-center text-gray-600 py-2 ">
        {blog?.content?.split(" ", 50).join(" ")} ... 
        </p>
      </div>
      <div className="flex justify-center">
        <Link to={`/blog/${blog?._id}`}>
          <button className="border hover:shadow-md hover:shadow-slate-900 bg-white border-gray-600 rounded-3xl px-2 py-1 ">
            Read More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Cards1;
