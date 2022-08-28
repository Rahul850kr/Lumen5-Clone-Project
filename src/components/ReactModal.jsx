import React  from "react";
import Modal from "react-modal";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";
import "./ReactModal.css";
import { updatevideo } from "../Redux/AppReducer/action";
import { useDispatch,useSelector } from "react-redux";

export const ReactModal = (props) => {

  const sourceVideo = props.sorce;  
    // console.log(props);
  const [open, setOpen] = React.useState(false);
  const dispatch = useDispatch();
  const currVideo = useSelector(store=>store.AppReducer.Currvideo);
  console.log(currVideo);
  const navigate = useNavigate();
  return (
    <>
      <Button onClick={() => setOpen(true)}>Preview</Button>

      <Modal className="display-div" isOpen={open} onRequestClose={() => setOpen(false)}>

        <div className="top-div">
          <p >Preview template</p>
          <button onClick={() => setOpen(false)}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path d="M310.6 361.4c12.5 12.5 12.5 32.75 0 45.25C304.4 412.9 296.2 416 288 416s-16.38-3.125-22.62-9.375L160 301.3L54.63 406.6C48.38 412.9 40.19 416 32 416S15.63 412.9 9.375 406.6c-12.5-12.5-12.5-32.75 0-45.25l105.4-105.4L9.375 150.6c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 210.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25l-105.4 105.4L310.6 361.4z"/></svg></button>
        </div>

        <hr className="line"></hr>

        <p className="p-tag">Tracer</p>
        
        <div className="video-div">
            <video className="video-display" width="400"  controls>
              <source
                src={sourceVideo}
                type="video/mp4"
              />
            </video>
        </div>

        <div className="format-div">
          <div className="button-flex">
              <p>Format</p>
              <button>16:9</button>
              <button>1:1</button>
              <button>9:16</button>
              <button>9:16</button>
          </div>
         
          <button onClick={() => {
            dispatch(updatevideo(sourceVideo))
            // console.log(currVideo);
            navigate('/videocreation')
            }}>USE THIS TEMPLATE</button>
        </div>
        
      </Modal>
    </>
  );
};