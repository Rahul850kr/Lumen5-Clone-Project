import React from "react";
import { Image } from "@chakra-ui/react";
import img1 from "../images/img1.png";
import img2 from "../images/img2.png";
import img3 from "../images/img3.png";
import img4 from "../images/img4.png";
import img5 from "../images/img5.png";
import style from "./ImagesComp.module.css"


const ImagesComp = () => {
  return (
    <div className={style.imgMainDiv} >
      <div className={style.img} >
        <Image src={img1} alt=""/>
      </div>
      <div className={style.img} >
        <Image src={img2} alt=""/>
      </div>
      <div className={style.img} >
        <Image src={img3} alt=""/>
      </div>
      <div className={style.img} >
        <Image src={img4} alt=""/>
      </div>
      <div className={style.img} >
        <Image src={img5} alt=""/>
      </div>
    </div>
  );
};

export default ImagesComp;
