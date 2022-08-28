import React from "react";
import style from "./NavbarAfterLogin.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
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

const NavbarAfterLogin = () => {
  const userName = useSelector((store) => store.AuthReducer.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };
  return (
    <div className={style.mainDiv}>
      <div>
        <Link to="/">
          {" "}
          <img
            className={style.logo}
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
            alt="Logo"
          />
        </Link>
      </div>

      <div className={style.secondDiv}>
        <button className={style.upgrade}>UPGRADE</button>
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
  );
};

export default NavbarAfterLogin;
