import React, { useEffect, useState } from "react";
import classes from "../Blog.module.css";
import { BsFillHexagonFill } from "react-icons/bs";
import imagesCategory from "../../components/imageCategory";
import axios from "axios";

const MainSection = ({ id }) => {
  const [blogData, setBlogData] = useState({});
  const getblogData = async () => {
    try {
      const response = await axios.get(
        `https://blogserver.vercel.app/api/v1/blog/${id}`
      );
      setBlogData(response?.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getblogData();
  }, []);

  return (
    <div className="flex justify-center">
      <div className="bg-[#f0f0ff] rounded-xl px-5 py-4 mx-3 max-w-[1000px]">
        <div className="md:grid grid-cols-[1fr_1fr] gap-3">
          <img
            src={imagesCategory[Math.floor(Math.random() * 8)]}
            alt=""
            className=" rounded-lg object-contain"
          />
          <div className="px-2 md:px-6">
            <p className="mt-10  text-2xl font-bold">{blogData?.title}</p>
            <div className="flex justify-start items-center">
              <p className="py-3 font-semibold ">{blogData?.author} </p>
              <BsFillHexagonFill className="w-2 h-2 mx-3" />
              <p className="py-3 font-semibold ">Dec 12, 2023</p>
            </div>
            <div className="w-fit bg-white flex items-center rounded-3xl  px-2 border border-gray-700">
              <div className="w-2 h-2 mr-2 rounded-full bg-black"></div>
              <p>{blogData?.category?.charAt(0).toUpperCase()+ blogData?.category?.slice(1)}</p>
            </div>
            <p className="text-gray-700 mt-5  text-justify ">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Provident voluptatem iste impedit numquam, incidunt commodi fuga,
              ducimus maxime officiis qui minus voluptates at? Animi error vitae
              excepturi nesciunt pariatur tenetur.
            </p>
          </div>
        </div>
        <div>
          <p className="text-gray-800 text-lg text-justify mt-5 px-2 md:px-6">
          {blogData?.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default MainSection;
