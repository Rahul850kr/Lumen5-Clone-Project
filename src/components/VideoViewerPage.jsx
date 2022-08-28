import React, { useState } from "react";
import style from "./VideoViewer.module.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { BsFileEarmarkMedical, BsLink } from "react-icons/bs";

const VideoViewerPage = () => {
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const username=useSelector(store=>store.AuthReducer.user)

  function copy() {
    const el = document.createElement("input");
    el.value = window.location.href;
    document.body.appendChild(el);
    el.select();
    document.execCommand("copy");
    document.body.removeChild(el);
    setCopied(true);
    alert("link copied");
  }

  const onDownload = () => {
    const link = document.createElement("a");
    link.download = `Masai.mp4`;
    link.href = "./Masai.mp4";
    link.click();
  };

  return (
    // main section
    <div className={style.viewer_container}>
      {/* left section */}
      <div className={style.viewer_left}>
        {/* top section */}
        <div className={style.viewer_top}>
          <div className={style.viewer_title}>
            <span>Upgrade</span> to remove Lumen5 credit scene{" "}
          </div>
          <div className={style.viewer_btn}>
            <button>Upgrade</button>
          </div>
        </div>

        {/* bottom section */}
        <div className={style.viewer_bottom}>
          {/* 1st div */}
          <div className={style.viewer_video}>
            <video
              src="Masai.mp4"
              // autoPlay
              muted={false}
            ></video>
          </div>
          <div>
            {/* 2nd div */}
            <div className={style.viewer_div2}>
              <div className={style.viewer_titlediv}>
                <h1>Untitle Video</h1>
              </div>
              <div className={style.viewer_content}>
                <div className={style.viewer_contentleft}>
                  <div className={style.viewer_first}>P</div>
                  <div className={style.viewer_name}>
                    {username}<br />
                    Publish on 23 Aug
                  </div>
                </div>
                <div className={style.viewer_contentright}>
                  <button
                    className={style.viewer_Edit}
                    onClick={() => navigate("/videocreation")}
                  >
                    Edit Video
                  </button>
                  <button
                    className={style.viewer_download}
                    onClick={onDownload}
                  >
                    Download
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* 3rd div */}
          <div className={style.viewer_lastdiv}>
            <div>
              {/* <BsLink/> */}
              <select className={style.viewer_select} id="">
                <option value="Anyone">Anyone with the link</option>
                <option value="private">This video is private</option>
              </select>
            </div>
            <div className={style.viewer_btndiv}>
              {/* <button>Transcript</button> */}

              <Button onClick={onOpen}>
                <BsFileEarmarkMedical />
                Transcript
              </Button>

              <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent width="900px">
                  <ModalHeader>Title</ModalHeader>

                  <ModalCloseButton />
                  <hr />
                  <ModalHeader>Untitled Video</ModalHeader>
                  <ModalBody padding={"0px 20px 20px 20px"}>
                    8 Signs You <br />
                    Might Need a <br />
                    Digital Detox Presented by Lumen5
                  </ModalBody>
                </ModalContent>
              </Modal>

              <button>Resize</button>
              <button onClick={copy}>
                {/* <BsLink/> */}
                Copy link
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* right section */}
      <div className={style.viewer_right}>
        <div className={style.right_head}>
          Comments <span>scene 1</span>
        </div>
        <div className={style.viewer_imgcontent}>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/collab-comment.png"
            alt=""
          />
          <div>
            Be the first to leave a<br />
            comment on this scene
          </div>
        </div>
        <div className={style.viewer_btnlastdiv}>
          <button>comment on this scene</button>
        </div>
      </div>
    </div>
  );
};

export default VideoViewerPage;
