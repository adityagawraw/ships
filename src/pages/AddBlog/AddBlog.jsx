import React, { useEffect, useState } from "react";
import classes from "./AddBlog.module.css";
import { RxCross2 } from "react-icons/rx";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
const AddBlog = ({ modal, setModal }) => {
  const { name } = useSelector((state) => state.auth);
  const [blogData, setBlogData] = useState({
    title: "",
    author: name,
    category: "",
    content: "",
    tags: [],
  });
  //Change author when author name recived from Redux
  useEffect(() => {
    setBlogData((prev) => {
      return { ...prev, author: name };
    });
  }, [name]);
  // Post blog
  const postBlog = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://blogserver.vercel.app/api/v1/blog",
        blogData
      );
      toast.success("Blog posted sucessfully!!!");
      setBlogData({
        title: "",
        author: name,
        category: "",
        content: "",
        tags: [],
      })
      setModal(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleBlogDataChange = (e) => {
    setBlogData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  if (!modal) return null;
  return (
    <div className={classes.modal}>
      <div
        className={`${classes.content}  px-4 py-4 bg-white h-[80%] md:h-[80%] w-[80%]  md:w-[70%] lg:w-[60%]  rounded-lg border border-gray-700`}
      >
        <div className="flex justify-end">
          <RxCross2
            onClick={() => setModal(false)}
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <form onSubmit={postBlog}>
          <div>
            <p className="text-gray-800 font-bold text-base md:text-xl">
              Title
            </p>
            <input
              type="text"
              name="title"
              value={blogData.title}
              onChange={handleBlogDataChange}
              className="outline-none   py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
            />
          </div>
          <div>
            <p className="text-gray-800 font-bold text-base md:text-xl ">
              Category
            </p>
            {/* <input
              type="text"
              name="category"
              value={blogData.category}
              onChange={handleBlogDataChange}
              className="outline-none  py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
            /> */}
            <select
              type="text"
              name="category"
              onChange={handleBlogDataChange}
              className="outline-none py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
            >
              <option value="tech">Tech</option>
              <option value="sport">Sport</option>
              <option value="games">Gaming</option>
              <option value="food">Food</option>
            </select>
          </div>
          <div>
            <p className="text-gray-800 font-bold text-base md:text-xl">
              Image
            </p>
            <input
              type="file"
              className="resize-none outline-none py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
            />
          </div>
          <div>
            <p className="text-gray-800 font-bold text-base md:text-xl">
              Description
            </p>
            <textarea
              type="text"
              name="content"
              value={blogData.content}
              onChange={handleBlogDataChange}
              className="resize-none outline-none py-1 md:py-2 px-1 md:px-2 border border-gray-700 rounded w-full my-2"
            />
          </div>
          <div className="flex justify-center">
            <button className=" bg-blue-600 hover:bg-blue-500 px-3 py-1 font-semibold text-white rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
