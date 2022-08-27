import React, { useEffect,useRef,Component, useState } from 'react';
import "./Template.css";
import NavbarAfterLogin from './NavbarAfterLogin';
import {ReactModal} from "./ReactModal";
import { Show_Button,Left_div_compo } from "./Button";

const Template = () => {
     const [count,setcount]=useState(0);
     const gradi = useRef(null);
     const roun = useRef(null);
     const geom = useRef(null);
     const dy = useRef(null);
     const profes = useRef(null);
     const mode = useRef(null);
     // const executeScroll=(x)=>gradi.current.scrollIntoView();
     

     const items = [
          {
               id: 1,
               image:"https://storage.googleapis.com/lumen5-prod-lottie/Tracer/Preview/Tracer_Thumbnail_4a.png",
               name: "Tracer",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4"
          },
          {
               id: 2,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Memory/Preview/Prev_Memory_Land_v1.png",
               name: "Memory",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Memory/Preview/Prev_Memory_Land_v1.mp4",
          },
          {
               id: 3,
               image: "https://storage.googleapis.com/lumen5-site-images/Prev_Saturate_v2.png",
               name: "Saturate",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Saturate_v1.mp4",
          },
          {
               id: 4,
               video: "https://storage.googleapis.com/lumen5-site-images/Prev_Odyssey_2.mp4",
               name: "Odyssey",
               button: "PREVIEW"
          },
          {
               id: 5,
               video: "https://storage.googleapis.com/lumen5-prod-renderedvideos/videorenderingdataZFYmHqIyZNNB.mp4",
               name: "Cupcake Couture",
               button: "PREVIEW"   
          },
          {
               id: 6,
               video: "https://storage.googleapis.com/lumen5-site-images/Prev_Circle_mask_v3.mp4",
               name: "Focus",
               button: "PREVIEW"   
          },
          {
               id: 7,
               video: "https://storage.googleapis.com/lumen5-prod-renderedvideos/videorenderingdataAD88bqVBWDgb.mp4" ,
               name: "Be Yourself",
               button: "PREVIEW"   
          } 
     ];
     
     const temps=[
          {
               id:"1",
               image:"https://storage.googleapis.com/lumen5-prod-lottie/Magnifique/Preview/magnifique_Landscape_Preview.png",
               name:"Magnifique",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Magnifique/Preview/magnifique_Preview_Music1.mp4"
          },
          {
               id:"2",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Unity_landscape.png",
               name:"Unity",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Unity_landscape.mp4"
          },
          {
               id:"3",
               image:"https://storage.googleapis.com/lumen5-prod-lottie/Vault/Preview/Vault_Preview_Landscape.png",
               name:"Vault",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Vault/Preview/Vault_Preview_Landscape_V2.mp4"
          },
          {
               id:"4",
               image:"https://storage.googleapis.com/lumen5-site-images/Notice_PreviewV2.png",
               name:"Notice",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Notice-Preview-Resized.m4v"
          },
          {
               id:"5",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Origin_v1b.png",
               name:"Origin",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Origin_v1.mp4"
          },
          {
               id:"6",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2c.png",
               name:"Smart 2c",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2c_v2.mp4"
          },
          {
               id:"7",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Feather_2.png",
               name:"Feather",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Feather.mp4"
          },
          {
               id:"8",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Vivid_v2.png",
               name:"Vivid",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Vivid_v2.mp4"
          },
     ];

     const dyna=[
          {
               id: 1,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Looper/Preview/New/Looper_Landscape_Preview.png",
               name: "Looper",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Looper/Preview/New/Looper_Landscape_Preview.mp4"
          },
          {
               id: 2,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Cosmo/Previews/Cosmos_landscape_thumb2.png",
               name: "Cosmos",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Cosmo/Previews/Cosmos_landscape_vid2.mp4"
          },
          {
               id: 3,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Geek/Geek_thumbnail01.png",
               name: "Geek",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Geek/Geek_Preview01.m4v"
          },
          {
               id: 4,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Curly/Preview/Curly_Prev_Land_v2.png",
               name: "Curly",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Curly/Preview/Curly_Prev_Land_v2.mp4"
          },
          {
               id: 5,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Boldly/Preview/Boldly_Prev_Land_v2.png",
               name: "Boldly",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Boldly/Preview/Boldly_Prev_Land_v2.mp4"
          },
     ];

     const gdata=[ 
          {
               id: 1,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Aether/Previews/Aether_Landscape_Preview.png",
               name: "Aether",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Aether/Previews/Aether_Landscape_Preview_V3.mp4"
          },
          {
               id: 2,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Contour/Preview/Prev_Contour_Land_v1.png",
               name: "Contour",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Contour/Preview/Prev_Contour_Land_v1.mp4"
          },
          {
               id: 3,
               image: "https://storage.googleapis.com/lumen5-prod-lottie/Vertex/Preview/Vertex-preview_thumb.png",
               name: "Vertex",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Vertex/Preview/Vertex-preview_2.m4v"
          },
          {
               id: 4,
               image: "https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2.png",
               name: "Smart",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2_v2.mp4"
          },
          {
               id: 5,
               image: "https://storage.googleapis.com/lumen5-site-images/Prev_Ascend.png",
               name: "Ascend",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Ascend.mp4"
          },
          {
               id: 6,
               image: "https://storage.googleapis.com/lumen5-site-images/Preview_Modern.png",
               name: "Modern",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Two_BG_Color_v2.mp4"
          },
          {
               id: 7,
               image: "https://storage.googleapis.com/lumen5-prod-images/tmp-placeholder-imgGMdTKE.jpg",
               name: "Focus On The Good",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-renderedvideos/1770375-video-segment-0KyKJ0UviOflp.mp4"
          },
          {
               id: 8,
               image: "https://storage.googleapis.com/lumen5-site-images/Static_Smart_3.png",
               name: "Smart (2019)",
               button: "PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Preview_Smart_3.mp4"
          },
     ];

     const round=[
          {
               id:"1",
               image:"https://storage.googleapis.com/lumen5-site-images/prev_eclipse_landscape.png",
               name:"Eclipse",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/prev_eclipse_landscape3.mp4"
          },
          {
               id:"2",
               image:"https://storage.googleapis.com/lumen5-prod-lottie/Billow/Preview/Billow_thumbnailver4.png",
               name:"Billow",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Billow/Preview/Billow-new_3.m4v"
          },
          {
               id:"3",
               image:"https://storage.googleapis.com/lumen5-prod-lottie/Orbit/Previews/Preview_Orbit_Land_v2c.png",
               name:"Orbit",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Orbit/Previews/Preview_Orbit_Land_v2c.mp4"
          },
          {
               id:"4",
               image:"https://storage.googleapis.com/lumen5-prod-lottie/Circuit/Preview/Circuit_thumbnail_2.png",
               name:"Circuit",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Circuit/Preview/Preview_Circuit_02.m4v"
          },
          {
               id:"5",
               image:"https://storage.googleapis.com/lumen5-site-images/Preview_Focus.png",
               name:"Focus",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Circle_mask_v3.mp4"
          },
          {
               id:"6",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Brilliant_v2.png",
               name:"Brilliant",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Brilliant_v2.mp4"
          },
          {
               id:"7",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Circle_text_box.png",
               name:"Lively",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Circle_text_box_v2.mp4"
          }
     ];

     const grad =[
          {
               id:"1",
               image:"https://storage.googleapis.com/lumen5-prod-lottie/Foresight/Preview/Prev_Foresight_Land.png",
               name:"Foresight",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Foresight/Preview/Prev_Foresight_Land.mp4"
          },
          {
               id:"2",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Polaris_landscape.png",
               name:"Polaris",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Polaris_landscape2.mp4"
          },
          {
               id:"3",
               image:"https://storage.googleapis.com/lumen5-prod-lottie/Flux/Preview/V3/Flux_Landscape_Preview_v2.png",
               name:"Flux",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-prod-lottie/Flux/Preview/V3/Flux_Landscape_Preview_v2.mp4"
          },
          {
               id:"4",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Fresh_2.png",
               name:"Fresh",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Fresh_2_v2.mp4"
          },
          {
               id:"5",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Regal.png",
               name:"Regal",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Regal_v2.mp4"
          },
          {
               id:"6",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2b.png",
               name:"Smart 2b",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Smart_2b_v2.mp4"
          },
          {
               id:"7",
               image:"https://storage.googleapis.com/lumen5-site-images/Prev_Fresh_2b.png",
               name:"Fresh 2b",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Fresh_2b_v2.mp4"
          },
          {
               id:"8",
               image:"https://storage.googleapis.com/lumen5-site-images/Preview_Fresh.png",
               name:"Fresh",
               button:"PREVIEW",
               video:"https://storage.googleapis.com/lumen5-site-images/Prev_Fresh_2_v2.mp4"
          },
     ];

     const handleScroll=(x)=>{
          if(x=="gradi"){
               gradi.current.scrollIntoView();
          }
          if(x=="roun"){
               roun.current.scrollIntoView();
          }
          if(x=="mode"){
               mode.current.scrollIntoView();
          }
          if(x=="dy"){
               dy.current.scrollIntoView();
          }
          if(x=="geom"){
               geom.current.scrollIntoView();
          }
          if(x=="profes"){
               profes.current.scrollIntoView();
          }
          // console.log(x);
          // executeScroll(x);
     }

     
     
     useEffect(()=>{
     },[count])

  return (
    <div className='container'>
     <NavbarAfterLogin/>
          <div className="bgcolor">
               <div className="component-div">
                    <div className="LeftDiv">
                              <Left_div_compo className="component" onClick={()=>handleScroll("mode")}> Modern </Left_div_compo> 
                              <Left_div_compo className="component" onClick={()=>handleScroll("profes")}> Professional </Left_div_compo> 
                              <Left_div_compo className="component" onClick={()=>handleScroll("dy")}> Dynamic </Left_div_compo> 
                              <Left_div_compo className="component" onClick={()=>handleScroll("geom")}> Geometric </Left_div_compo> 
                              <Left_div_compo className="component" onClick={()=>handleScroll("roun")}> Rounded </Left_div_compo> 
                              <Left_div_compo className="component" onClick={()=>handleScroll("gradi")}> Gradient </Left_div_compo>  
                    </div>
                    <div className="right-div">
                         <div>
                              <span className="text">Choose a template</span>
                              <span className="smalltext">Recommended color, font, and style combos, curated and ready to use.</span>
                         </div>
                         <div ref={mode} className="modern-div">
                              <span className="smalltext">MODERN</span>
                         </div>
                         <div className="pictures">
                                   {
                                        items.map((elem) => {
                                             const  {name,video,image} = elem;
                                             return(
                                                  <div key={elem.id} className="images-div">
                                                       <video className="height"
                                                       poster={image} 
                                                       onMouseOver={event => {event.target.play();  setcount(prev=>prev+1)}} 
                                                       onMouseOut={event => {event.target.pause();  setcount(prev=>prev-1)}} 
                                                       muted
                                                       src={video}
                                                       />
                                                       <div className="flex-div">
                                                            <p className="img-text">{name}</p>
                                                            {/* <Buton style={{display:"flex"}} >Preview</Buton> */}
                                                            <ReactModal  sorce={`${video}`}/>
                                                       </div>
                                                  </div>
                                             );
                                        })
                                   }  
                         </div>
                         <div ref={profes} className="modern-div">
                              <span className="smalltext">PROFESSIONAL</span>
                         </div>
                         <div className="pictures">
                              {
                                   temps.map((elem) => {
                                        const  {image,button,name,video} = elem
                                        return(
                                             <div key={elem.id} className="images-div">
                                                  <video className="height"
                                                  poster={image} 
                                                  muted
                                                  onMouseOver={event => event.target.play()} 
                                                  onMouseOut={event => event.target.pause()} 
                                                  src={video}
                                                  />
                                                  <div className="flex-div">
                                                       <p className="img-text">{name}</p>
                                                       {/* <Buton style={{display:"flex"}} >Preview</Buton> */}
                                                       <ReactModal  sorce={`${video}`}/>
                                                  </div>
                                             </div>
                                        );
                                   })
                              }  
                         </div> 
                         {/* <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                         </div> */}
                         <div ref={dy} className="modern-div">
                              <span className="smalltext">DYNAMIC</span>
                         </div>
                         <div className="pictures">
                              {
                                   dyna.map((elem) => {
                                        const  {image,button,name,video} = elem
                                        return(
                                             <div key={elem.id} className="images-div">
                                                  <video className="height"
                                                  poster={image} 
                                                  muted
                                                  onMouseOver={event => event.target.play()} 
                                                  onMouseOut={event => event.target.pause()} 
                                                  src={video}
                                                  />
                                                  <div className="flex-div">
                                                       <p className="img-text">{name}</p>
                                                       {/* <Buton style={{display:"flex"}} >Preview</Buton> */}
                                                       <ReactModal  sorce={`${video}`}/>
                                                  </div>
                                             </div>
                                        );
                                   })
                              }  
                         </div>
                         {/* <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                         </div> */}
                         <div ref={geom} className="modern-div">
                              <span className="smalltext">GEOMETRIC</span>
                         </div>
                         <div className="pictures">
                              {
                                   gdata.map((elem) => {
                                        const  {image,button,name,video} = elem
                                        return(
                                             <div key={elem.id} className="images-div">
                                                  <video className="height"
                                                  poster={image} 
                                                  muted
                                                  onMouseOver={event => event.target.play()} 
                                                  onMouseOut={event => event.target.pause()} 
                                                  src={video}
                                                  />
                                                  <div className="flex-div">
                                                       <p className="img-text">{name}</p>
                                                       {/* <Buton style={{display:"flex"}} >Preview</Buton> */}
                                                       <ReactModal  sorce={`${video}`}/>
                                                  </div>
                                             </div>
                                        );
                                   })
                              }  
                         </div>
                         {/* <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                         </div> */}
                         <div ref={roun} className="modern-div">
                                   <span className="smalltext">ROUNDED</span>
                         </div>
                         <div className="pictures">
                              {
                                   round.map((elem) => {
                                        const  {image,button,name,video} = elem
                                        return(
                                             <div key={elem.id} className="images-div">
                                                  <video className="height"
                                                  poster={image} 
                                                  muted
                                                  onMouseOver={event => event.target.play()} 
                                                  onMouseOut={event => event.target.pause()} 
                                                  src={video}
                                                  />
                                                  <div className="flex-div">
                                                       <p className="img-text">{name}</p>
                                                       {/* <Buton style={{display:"flex"}} >Preview</Buton> */}
                                                       <ReactModal  sorce={`${video}`}/>
                                                  </div>
                                             </div>
                                        );
                                   })
                              }  
                         </div>
                         {/* <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                         </div> */}
                         <div ref={gradi} className="modern-div">
                              <span className="smalltext">GRADIENTS</span>
                         </div>
                         <div className="pictures">
                              {
                                   grad.map((elem) => {
                                        const  {image,button,name,video} = elem
                                        return(
                                             <div key={elem.id} className="images-div">
                                                  <video className="height"
                                                  poster={image} 
                                                  muted
                                                  onMouseOver={event => event.target.play()} 
                                                  onMouseOut={event => event.target.pause()} 
                                                  src={video}
                                                  />
                                                  <div className="flex-div">
                                                       <p className="img-text">{name}</p>
                                                       {/* <Buton style={{display:"flex"}} >Preview</Buton> */}
                                                       <ReactModal sorce={`${video}`}/>
                                                  </div>
                                             </div>
                                        );
                                   })
                              }  
                         </div>
                         {/* <div className="btn-div">
                                   <Show_Button>Show all </Show_Button>
                         </div> */}
                    </div>
               </div>
          </div>
          
    </div>
  )
}

export default Template;


// const Buton = styled.button `
//  border-radius:20px;
//  padding:10px 25px 25px 25px;
//  color:blue;
//  background-color:white;
//  border:1px solid blue;
// `


class ReadyToScroll extends Component {
     constructor(props) {
       super(props);
       this.gradi = React.createRef();
       this.roun = React.createRef();
       this.geom = React.createRef();
       this.dy = React.createRef();
       this.mode = React.createRef();
       this.profes = React.createRef();
     }
     render() {
       return <div ref={this.gradi}>Element to scroll to</div>;
     }
   
     executeScroll = () => this.gradi.current.scrollIntoView();
     executeScroll = () => this.roun.current.scrollIntoView();
     executeScroll = () => this.geom.current.scrollIntoView();
     executeScroll = () => this.dy.current.scrollIntoView();
     executeScroll = () => this.profes.current.scrollIntoView();
     executeScroll = () => this.mode.current.scrollIntoView();
     // run this method to execute scrolling.
   }
