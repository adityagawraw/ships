import React from "react";
import classes from "./Navbar.module.css";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import {GoThreeBars} from "react-icons/go"
const NavBar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.navContent}>
        <img src={"/images/logo-no-background.png"} className={classes.logo} />
        <div className={classes.options}>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Home
          </button>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Membership
          </button>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Sport
          </button>
       
        </div>
        <div className={`${classes.social} flex max-w-[200px] justify-between items-center h-[50px]`}>
          <GrFacebookOption className={`text-blue-600  ${classes.icons}`} />
          <AiFillInstagram className={`text-pink-600  ${classes.icons}`} />
          <AiOutlineTwitter className={`text-blue-400  ${classes.icons}`} />
          <AiFillYoutube className={`text-red-600 ${classes.icons}`} />
        </div>
        <GoThreeBars className={classes.bars}/>
      </div>
    </div>
  );
};

export default NavBar;
