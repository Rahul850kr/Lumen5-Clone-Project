import React from "react";
import style from "./NavbarCreation.module.css";
import {Link} from "react-router-dom";

const NavbarCreation = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.logoDiv} >
        <Link to="/">
         
          <img
            className={style.logo}
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
            alt="Logo"
          />
        </Link>
        <button className={style.upgrade} >UPGRADE</button>
      </div>
      <div className={style.secondDiv} >
        <div className={style.secondInnerDiv} >
            <button className={style.preview} >PREVIEW</button>
            <button className={style.publish} >PUBLISH</button>
        </div>
        <div className={style.secondInnerDiv} >
        <i id={style.bell} className="fa-regular fa-bell"></i>
        <button className={style.logout} >R</button>
        </div>
      </div>
    </div>
  );
};

export default NavbarCreation;
