import React, { useState } from "react";
import classes from "./AddBlog.module.css";
import { RxCross2 } from "react-icons/rx";
const AddBlog = ({ modal, setModal }) => {
  const [blogData, setBlogData] = useState({
    title: "",
    category: "",
    summary: "",
    content: "",
  });

  const handleBlogDataChange = (e) => {
    setBlogData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  if (!modal) return null;
  return (
    <div className={classes.modal}>
      <div className={`${classes.content} px-4 py-4 bg-[#fffacd] h-[96%] md:h-[80%] w-[80%]  md:w-[70%] lg:w-[60%]  rounded-lg border border-gray-700`}>
        <div className="flex justify-end">
          <RxCross2
            onClick={() => setModal(false)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl">Title</p>
          <input
            type="text"
            name="title"
            value={blogData.title}
            onChange={handleBlogDataChange}
            className="outline-none  py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
          />
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl ">Category</p>
          <input
            type="text"
            name="category"
            value={blogData.category}
            onChange={handleBlogDataChange}
            className="outline-none  py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
          />
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl">Image</p>
          <input
            type="file"
            className="resize-none outline-none  py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
          />
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl ">Info</p>
          <textarea
            type="text"
            name="summary"
            value={blogData.summary}
            onChange={handleBlogDataChange}
            className="resize-none outline-none py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
          />
        </div>
        <div>
          <p className="text-gray-800 font-bold text-base md:text-xl ">Description</p>
          <textarea
            type="text"
            name="content"
            value={blogData.content}
            onChange={handleBlogDataChange}
            className="resize-none outline-none  py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
          />
        </div>
        <div className="flex justify-center">
          <button className="border border-gray-700 bg-[#fff597] px-3 py-1  rounded">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;
