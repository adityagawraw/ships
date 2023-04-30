import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import Header from "./components/Header/Header";
import MainSection from "./components/Main/MainSection";
import classes from "./Home.module.css";
import { HiPlus } from "react-icons/hi";
import { MdKeyboardArrowUp } from "react-icons/md";
import AddBlog from "../AddBlog/AddBlog";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { openSignin } from "../../features/navbarSlice";
import { toast } from "react-hot-toast";
const Home = () => {
  const [modal, setModal] = useState(false);
  const [blogList, setBlogList] = useState([]);
  const state = useSelector((store) => store.auth);
  const dispatch = useDispatch();
  window.scroll({ top: 0, left: 0 });

  const getblogData = async () => {
    try {
      const response = await axios.get(
        "https://blogserver.vercel.app/api/v1/blog"
      );
      console.log(response);
      setBlogList(response?.data?.blogs);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getblogData();
  }, []);
  return (
    <div
      onScroll={() => {
        console.log("hello");
      }}
      className={`${classes.home}`}
    >
      <img
        src={"/images/820.jpg"}
        alt=""
        className="fixed w-[100vw] h-[100vh] top-1 z-[-1] object-cover"
      />
      <div>
        <NavBar />
        <Header blogList={blogList} />
        <MainSection blogList={blogList} />
        <button
          onClick={() => {
            if (state?.isAuth) {
              setModal(true);
            } else {
              toast.error("Please Login to your account");
              dispatch(openSignin({ signin: true }));
            }
          }}
          className={`${classes.addBlog} fixed top-[140px] left-2 bg-white rounded-full border border-gray-700`}
        >
          <HiPlus className="w-[30px] h-[30px] mx-3 my-3" />
          <p className="pr-2 font-semibold  ">Add Blog</p>
        </button>
        <button
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: "smooth" });
          }}
          className={`${classes.scroll} fixed bottom-[200px] bg-white rounded-full border border-gray-700`}
        >
          <MdKeyboardArrowUp className="w-[30px] h-[30px] mx-3 my-3" />
        </button>
      </div>
      <AddBlog getblogData={getblogData} modal={modal} setModal={setModal} />
    </div>
  );
};

export default Home;
