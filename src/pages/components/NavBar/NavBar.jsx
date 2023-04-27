import React, { useEffect, useState } from "react";
import classes from "./Navbar.module.css";
import { GrFacebookOption } from "react-icons/gr";
import {
  AiFillInstagram,
  AiFillYoutube,
  AiOutlineTwitter,
} from "react-icons/ai";
import { GoThreeBars } from "react-icons/go";
import { Link } from "react-router-dom";
const NavBar = () => {
  const [dropdown, setDropDown] = useState(false);
  const [fixed, setFixed] = useState(false);
  window.addEventListener("scroll", () => {
    window.pageYOffset >= 32 ? setFixed(true) : setFixed(false);
  });
  return (
    <div>
      {fixed ? (
        <NavBarFixed />
      ) : (
        <div className={classes.nav}>
          <div className={classes.navContent}>
            <Link to="/">
              <img
                src={"/images/logo-no-background.png"}
                className={classes.logo}
              />
            </Link>
            <div className={classes.options}>
              {/* <Link to='/'>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Home
          </button>
          </Link>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Membership
          </button>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Sport
          </button> */}
            </div>
            <div
              className={`${classes.social} flex max-w-[300px] justify-between items-center h-[50px]`}
            >
              <GrFacebookOption className={`text-blue-600  ${classes.icons}`} />
              <AiFillInstagram className={`text-pink-600  ${classes.icons}`} />
              <AiOutlineTwitter className={`text-blue-400  ${classes.icons}`} />
              <AiFillYoutube className={`text-red-600 ${classes.icons}`} />
              <div className="w-[100px]">
                <button
                  className={`${classes.signin} hover:text-white active:text-white font-semibold px-2 mx-1 border border-gray-500 rounded-full`}
                >
                  Sign In
                </button>
              </div>
            </div>
            <GoThreeBars
              onClick={() => setDropDown((prev) => !prev)}
              className={classes.bars}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default NavBar;

const NavBarFixed = () => {
  return (
    <div className={classes.navFixed}>
      <div className={classes.navContentFixed}>
        <Link to="/">
          <img
            src={"/images/logo-no-background.png"}
            className={classes.logo}
          />
        </Link>
        <div className={classes.options}>
          {/* <Link to='/'>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Home
          </button>
          </Link>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Membership
          </button>
          <button className="px-2 mx-1 border border-gray-500 rounded-full">
            Sport
          </button> */}
        </div>
        <div
          className={`${classes.social} flex max-w-[300px] justify-between items-center h-[50px]`}
        >
          <GrFacebookOption className={`text-blue-600  ${classes.icons}`} />
          <AiFillInstagram className={`text-pink-600  ${classes.icons}`} />
          <AiOutlineTwitter className={`text-blue-400  ${classes.icons}`} />
          <AiFillYoutube className={`text-red-600 ${classes.icons}`} />
          <div className="w-[100px]">
            <button
              className={`${classes.signin} hover:text-white active:text-white font-semibold px-2 mx-1 border border-gray-500 rounded-full`}
            >
              Sign In
            </button>
          </div>
        </div>
        <GoThreeBars className={classes.bars} />
      </div>
    </div>
  );
};
