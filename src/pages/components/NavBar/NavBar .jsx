import React from "react";
import classes from "./Navbar.module.css";
const NavBar = () => {
  return (
    <div className={classes.nav}>
      <div className={classes.navContent}>
        <p className={classes.logo}>Ships</p>
      </div>
    </div>
  );
};

export default NavBar;
