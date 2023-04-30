import React from "react";
import classes from "./Navbar.module.css";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { openSignin } from "../../../features/navbarSlice";
import { useDispatch } from "react-redux";

const NavDropdown = ({fixed}) => {
  const dispatch = useDispatch();
  return (
    <div className={fixed ? classes.dropdownFixed : classes.dropdown}>
      <div className="h-[35px] flex justify-center items-center border-b border-gray-600">
        <button> Home </button>
      </div>
      <div className="flex w-full justify-center items-center h-[35px] border-b border-gray-600">
        <GrFacebookOption className={`text-blue-600  ${classes.icons}`} />
        <AiFillInstagram className={`text-pink-600  ${classes.icons}`} />
        <AiOutlineTwitter className={`text-blue-400  ${classes.icons}`} />
        <AiFillYoutube className={`text-red-600 ${classes.icons}`} />
      </div>
      <div className="w-full flex justify-center items-center h-[35px] border-b border-gray-600">
        <button 
        onClick={()=>{
          dispatch(openSignin({signin:true}))
        }}
        className={`  font-semibold px-2 mx-1 `}>Sign In</button>
      </div>
    </div>
  );
};

export default NavDropdown;
