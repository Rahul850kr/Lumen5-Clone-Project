import React, { useEffect, useState } from "react";
import NavbarCreation from "./NavbarCreation";
import style from "./VideoCreation.module.css";
import {
  Button,
  Input,
  Text,
  Spinner,
  useToast,
  CircularProgress,
} from "@chakra-ui/react";
import axios from "axios";
import ImagesComp from "./ImagesComp";
import DummyTemp from "./DummyTemp";

const VideoCreationPage = () => {
  const [text, setText] = useState("");
  const [importing, setImporting] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const [open, setOpen] = React.useState(false);
  // console.log(text.length);

  const handleImport = () => {
    if (
      text ===
      "https://blog.masaischool.com/nsdc-x-masai-skilling-india-together/"
    ) {
      setLoading(true);
      setTimeout(() => {
        setImporting(true);
        setLoading(false);
      }, 3000);
    }
  };

  const handleConvert = () => {
    if (
      text ==
      "https://blog.masaischool.com/nsdc-x-masai-skilling-india-together/"
    ) {
      setLoading(true);
      setTimeout(() => {
        toast({
          title: "Video Converted",
          description: "Click on Preview to watch and confirm",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setLoading(false);
      }, 3000);
    }
  };
  return (
    <div>
      <NavbarCreation />
      <div className={style.mainDiv}>
        <div className={style.sidebar}>
          <div className={style.sideHover} style={{ color: "#5846f6" }}>
            <i className="fa-solid fa-align-center"></i>
            <Text>Story</Text>
          </div>
          <div className={style.sideHover}>
            <i className="fa-solid fa-photo-film"></i>
            <Text>Media</Text>
          </div>
          <div className={style.sideHover}>
            <i className="fa-solid fa-icons"></i>
            <Text>Icons</Text>
          </div>
          <div className={style.sideHover}>
            <i className="fa-solid fa-music"></i>
            <Text>Music</Text>
          </div>
          <div className={style.sideHover}>
            <i className="fa-solid fa-border-top-left"></i>
            <Text>Style</Text>
          </div>
          <div className={style.sideHover}>
            <i className="fa-solid fa-vector-square"></i>
            <Text>Format</Text>
          </div>
        </div>
        <div className={style.textArea}>
          <div className={style.url}>
            <i className="fa-solid fa-paste"></i>
            <Input
              placeholder="Paste a URL to your blog/article"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Button
              onClick={handleImport}
              colorScheme="#5846f6"
              disabled={text.length === 0}
              className={style.import}
            >
              Import
            </Button>
          </div>
          <div className={style.actualTextArea}>
            <textarea
              cols="30"
              rows="10"
              placeholder="👋 Welcome to Lumen5!
              
              📝 PREPARE YOUR SCRIPT
Paste the URL from your article or blog in the field above or copy/paste text directly in this text box.

🏗 BUILD YOUR VIDEO WITH SCENES
Click the green (+) button or drag text and media into the editor to create new scenes.

🖼 POPULATE YOUR SCENES WITH MEDIA
Drag images and videos from the media tab on to your scenes. Upload your own or select from our stock media library. 

Can't find the right image? No worries – we offer many scene designs that convey your message with words and graphics only."
              className={style.textAreainner}
            ></textarea>
            <Button
            onClick={handleConvert}
              disabled={text.length === 0}
              colorScheme="#5846f6"
              className={style.convert}
            >
              Convert to video
            </Button>
          </div>
        </div>
        <div className={style.videoArea}>
          <div className={style.record}>
            <button className={style.recordBtn}>
              <i className="fa-solid fa-microphone"></i>
              Record your own voice
            </button>
            <div className={style.timerDiv}>
              <i className="fa-solid fa-clock"></i>
              00:07
              <i className="fa-solid fa-angle-down"></i>
            </div>
          </div>
          {loading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : null}
          {importing ? <ImagesComp /> : <DummyTemp />}
        </div>
      </div>
    </div>
  );
};

export default VideoCreationPage;
