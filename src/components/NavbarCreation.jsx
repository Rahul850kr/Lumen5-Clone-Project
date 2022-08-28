import React, { useState } from "react";
import style from "./NavbarCreation.module.css";
import { Link, useNavigate } from "react-router-dom";
import { Spinner } from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-modal";
import sourceVideo from "../Video/Masai.mp4"
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
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const userName = useSelector((store) => store.AuthReducer.user);
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  const handlePublish = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      navigate("/videoviewer");
    }, 3000);
  };

  return (
    <div className={style.mainDiv}>
      <div className={style.logoDiv}>
        <Link to="/">
          <img
            className={style.logo}
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
            alt="Logo"
          />
        </Link>
        <button className={style.upgrade}>UPGRADE</button>
      </div>
      <div className={style.secondDiv}>
        <div className={style.secondInnerDiv}>
          <button onClick={() => setOpen(true)} className={style.preview}>
            PREVIEW
          </button>
          <Modal
            className="display-div"
            isOpen={open}
            onRequestClose={() => setOpen(false)}
          >
            <div className="top-div">
              <p>Preview template</p>
              <button onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                  <path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z" />
                </svg>
              </button>
            </div>

            <hr className="line"></hr>

            <p className="p-tag">Tracer</p>

            <div className="video-div">
              <video className="video-display" width="400" controls>
                <source src={sourceVideo} type="video/mp4" />
              </video>
            </div>

           
          </Modal>
          <button onClick={handlePublish} className={style.publish}>
            {loading ? <Spinner size="sm" /> : "PUBLISH"}
          </button>
        </div>
        <div className={style.secondInnerDiv}>
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
