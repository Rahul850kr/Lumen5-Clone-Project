import React, { useState } from "react";
import style from "./NavbarCreation.module.css";
import {Link,useNavigate} from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useSelector,useDispatch } from "react-redux";
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
    Portal,
    Button,
  } from "@chakra-ui/react";
  import { logout } from "../Redux/AuthReducer/action";

const NavbarCreation = () => {
    const [loading,setLoading] = useState(false);
    const navigate = useNavigate();
    const userName = useSelector((store) => store.AuthReducer.user);
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout());
        navigate("/");
      };

    const handlePublish=()=>{
        setLoading(true);
        setTimeout(()=>{
            setLoading(false);
            navigate("/videoviewer")
        },3000)
    }
    
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
            <button onClick={handlePublish} className={style.publish} >{loading?<Spinner size='sm' />:"PUBLISH"}</button>
        </div>
        <div className={style.secondInnerDiv} >
        <i id={style.bell} className="fa-regular fa-bell"></i>
        <Popover>
          <PopoverTrigger>
            <button className={style.logout}>{userName}</button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent>
              <PopoverArrow />
              <PopoverHeader>{userName}</PopoverHeader>
              <PopoverCloseButton />
              <PopoverBody>
                <Button onClick={handleLogout} colorScheme="blue">
                  Logout
                </Button>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Popover>
        
        </div>
      </div>
    </div>
  );
};

export default NavbarCreation;
