import React from 'react';
import img1 from "../dummyimages/dummy1.png";
import img2 from "../dummyimages/dummy2.png";
import img3 from "../dummyimages/dummy3.png";
import img4 from "../dummyimages/dummy4.png";
import img5 from "../dummyimages/dummy5.png";
import style from "./DummyTemp.module.css";
import { Image } from '@chakra-ui/react';

const DummyTemp = () => {
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
  )
}

export default DummyTemp;