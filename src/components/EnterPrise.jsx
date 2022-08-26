import React, { useState } from "react";
import { Slide } from 'react-slideshow-image';
import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  Grid,
  GridItem,
  AspectRatio,
  Link,
} from "@chakra-ui/react";
import "./EnterPriceStyle.css";
import NavbarBeforeLogin from "./NavbarBeforeLogin";

const label = [
  {
    image:
      "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-salesforce-color.png",
  },
  {
    image:
      "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-pwc-color.png",
  },
  {
    image:
      "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-siemens-color1.png",
  },
  {
    image:
      "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-color.png",
  },
  {
    image:
      "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merk-color.png",
  },
  {
    image:
      "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-color.png",
  },
  {
    image:
      "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-mitsubishi-color.png",
  },
  {
    image:
      "https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-color.png",
  },
];

const Createvideos = [
  {
    videos:
      "https://storage.googleapis.com/lumen5-site-images/siemens_prev.mp4",
  },
  {
    videos:
      "https://storage.googleapis.com/lumen5-site-images/salesforce_prev.mp4",
  },
  {
    videos: "https://storage.googleapis.com/lumen5-site-images/viasat_prev.mp4",
  },
  {
    videos:
      "https://storage.googleapis.com/lumen5-site-images/storaenso_prev.mp4",
  },
];

const forthdiv = [
  {
    title: "Scale your content and break that bottleneck",
    desc: "Content creation bottlenecks swell up when a marketing team relies too much on a small group of specialized pros to produce a large volume of video content. Instead, put the freedom of video creation directly into the hands of all your teams while ensuring brand control and watch your content library multiply.",
  },
  {
    title: "Repurpose your already-amazing content",
    desc: "Great video content speaks louder than words (literally), and doesn’t need to be made from scratch. Lumen5 makes it easy to repurpose all of your existing marketing assets and messaging into captivating bite-sized videos optimized for online distribution. Multiply the content you already have and work smarter, not harder.",
  },
  {
    title: "Increase your customer engagement frequency",
    desc: "The most engaging brands are consistent and frequent with their communication while sharing relevant content that capture their audiences eyes, minds, and hearts. With Lumen5, your team can produce engaging videos in minutes, allowing your brand to stay top-of-mind, up-to-date, and relevant.",
  },
  {
    title: "Complement your agency with Lumen5",
    desc: "Not every video needs a big budget. While agencies are great for your mega high-production campaigns, such as TV commercials, brands are turning to Lumen5 to meet the demands of daily or weekly video content, purpose-built for social media and corporate communications.",
  },
];
const eightdiv=[
  {title:"Siemens",
   desc:"“One of the goals of the company is to help our customers in their digital transformation, Lumen5 helps us in getting more digital in our communications—that’s part of the digital transformation.”",
  image:"https://storage.googleapis.com/lumen5-site-images/website-assets/guenter-siemens.jpeg",
  name:"Guenter Gaugler",
  role:"Head of Content Production"},
  {title:"Mitsubishi",
  desc:"“Thanks to Lumen5, we have been able to cut down on time and costs for video making. We don’t have to go through a third party which speeds everything up and makes our work a lot easier.”",
 image:"https://storage.googleapis.com/lumen5-site-images/website-assets/adrian-mitsubishi.jpg",
 name:"Adrian Ngo",
 role:"Global Advertising and Sponsorships"},
 {title:"Cisco",
 desc:"“At Cisco we try to share lots of multimedia content and new types of content like memes, graphics and videos. And the videos by far give us the most engagement, thanks to Lumen5.”",
image:"https://storage.googleapis.com/lumen5-site-images/website-assets/eric-cisco.jpeg",
name:"Eric Chu",
role:"Social and DigitalContent Manager"},
]
const slideImages = [
  {
    url: 'https://storage.googleapis.com/lumen5-site-images/carousel-siemens-bg.png',
    caption: 'Slide 1',
    icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-siemens.png',
    description: "“Thanks to Lumen5, we have been able to cut down on the time and costs related to video making.”",
    name: "Adrian Ngo",
    title: "Global Advertising and Sponsorships"
  },
  {
    url: 'https://storage.googleapis.com/lumen5-site-images/carousel-dnv-bg.png',
    caption: 'Slide 2',
    icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-dnv.png',
    description: "“Lumen5 is especially helpful for business people who don't have the technical experience to make their own videos.”",
    name: "Peter Lovegrove",
    title: "Media Relations and Content Manager"
  },
  {
    url: 'https://storage.googleapis.com/lumen5-site-images/carousel-mhi-bg.png',
    caption: 'Slide 3',
    icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-mitsubishi.png',
    description: "“Thanks to Lumen5, we have been able to cut down on the time and costs related to video making.”",
    name: "Adrian Ngo",
    title: "Global Advertising and Sponsorships"
  },
  {
  url: 'https://storage.googleapis.com/lumen5-site-images/carousel-ncstate-bg.png',
  caption: 'Slide 4',
  icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-ncstate.png',
    description: "“We knew Lumen5 was the right tool, so there was no point in looking any further.”",
    name: "Drew Sykes",
    title: "Social Media Director"
  },
  {
  url: 'https://storage.googleapis.com/lumen5-site-images/carousel-cms-bg.png',
  caption: 'Slide 5',
  icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-cms.png',
  description: "“Lumen5 is especially helpful for business people who don't have the technical experience to make their own videos.”",
  name: "Amsal Alihodzic",
  title: "Senior Online Marketing Manager"
  },
  {
  url: 'https://storage.googleapis.com/lumen5-site-images/carousel-mondadori-bg.png',
  caption: 'Slide 6',
  icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-mondadori.png',
    description: "“Lumen5 helps us with what we want to achieve on social: engagement and reach.”",
    name: "Alfonso Biondi",
    title: "Social Video Specialist"
  },
  {
  url: 'https://storage.googleapis.com/lumen5-site-images/carousel-berkshire-bg.png',
  caption: 'Slide 7',
  icon: 'https://storage.googleapis.com/lumen5-site-images/carousel-berkshire.png',
    description: "“We were very attracted to Lumen5 due to the fact it was very turnkey and very simple. We could train a team of people to assist in the production of video.”",
    name: "Glen Wellbrock",
    title: "Senior Director of Marketing"
  },
];


const EnterPrise = () => {
const [video1, setVideo1] = useState([
  "https://storage.googleapis.com/lumen5-site-images/prev_tracer.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_billow.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_vertex.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_circuit.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_vault.mp4",
  "https://storage.googleapis.com/lumen5-site-images/prev_notice.mp4",
  "https://storage.googleapis.com/lumen5-site-images/flux_prev.mp4",
  "https://storage.googleapis.com/lumen5-site-images/unity_prev.mp4",
  "https://storage.googleapis.com/lumen5-site-images/looper_prev.mp4"
]);

const [contentmarketvideos, setcontentmarket] = useState([
  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Hydrogen%20Economy.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/siemens-content.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Responsible%20Investment.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Workplace%20Evolution.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/The%20Pandemic.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Content%20Marketing/Supply%20Chain%20Resilience.mp4"
]);

const [communicationsvideos, setCommunication] = useState([
  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Coral%20Reef%20Protection.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Zespri%20Selects%20SAP.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Textile%20Recycling.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Navigating%20the%20Seas.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Outstanding%20Researchers.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Communications/Fighting%20COVID-19.mp4"
])
const [promotionalvideos, setPromotional] = useState([
  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Global%20Leader%20(1).mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Remote%20Auditing.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Turbocompressor.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Innovation%20Awards.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/Dormakaba%20(1).mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Promotional/V%20Plate.mp4"
])

const [peopleAndculturevideos, setPeopleandculture] = useState([
  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Women%20in%20Tech.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Create%20Your%20Future.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/siemens-culture.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Voice%20of%20Sulzer.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/People%20_%20Culture/Fundraising%20Challenge.mp4"
])

const [localizationvideos, setLocalization] = useState([
  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(1).mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/siemens-local.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Agility.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Siemens%20Energy.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/DNV%20GL.mp4",
  "https://storage.googleapis.com/lumen5-site-images/homepage/Localization/Colliers%20(2).mp4"
])


  const [voice, setVoice] = useState(true);
  const [unchi, setUnchi] = useState("280px");
  const [vidchange, setVidChabge] = useState(contentmarketvideos)

  const handleClick = () => {
    setVoice(false);
    setUnchi("500px");
  };

  const Video = ({ url }) => {
    return (
      <video
        src={url}
        onMouseOver={(event) => {
          event.target.play();
        }}
        onMouseOut={(event) => event.target.pause()}
        onClick={() => handleClick()}
        muted={voice}
        style={{ borderRadius: "10px" }}
      />
    );
  };
  const [firstvideos, setFirstVideos] = useState(Createvideos);
  return (
    <>
      {/* first div */}
      <NavbarBeforeLogin/>
      <div className="en-div1">
        <div className="en-div1-mainpara">
          <div className="en-div1-para">
            <h3>ENTERPRISE</h3>
          </div>
          <div className="en-div1-h1">
            <h1>Create engaging videos at scale while keeping on brand.</h1>
          </div>
          <div className="en-div1-para">
            <h3>
              Lumen5 is the easiest and fastest way to create videos with your
              own custom branded templates. Decentralize video creation on your
              teams with confidence.
            </h3>
          </div>
          <div>
            <button className="en-div1-btn">Request a demo</button>
          </div>
        </div>
        <div className="en-div1-img">
          <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-header.png" />
        </div>
      </div>

      {/* second div */}
      <div className="en-div2-head">
        <h2>Over 6 million videos created by thousands of businesses</h2>
      </div>

      <div className="en-div2-img">
        {label.map((e) => (
          <img src={e.image} />
        ))}
      </div>

      {/* third div */}
      <div className="en-div3-head">
        <h1>Bespoke custom templates</h1>
      </div>
      <div className="en-div3-para">
        <h3>We work with your brand team every step of the way</h3>
      </div>
      <div className="en-div3-container"
        templateColumns="repeat(2, 1fr)"
        gap={6}
        margin="20px 150px 80px 150px"
      >
        {firstvideos.map((url, i) => {
          return (
              <Video url={url.videos} key={i}></Video>
          );
        })}
      </div>

      {/* forth div */}
      <div className="en-div4-container">
        {forthdiv.map((e) => (
           <div className="en-div4-singlecontainer">
              <div className="en-div4-head">{e.title}</div>
              <div className="en-div4-des">{e.desc}</div>
            </div>
        ))}
      </div>

      {/* fifth div */}
      <div className="en-div-5-cont">
        <div className="en-div5-img">
          <img src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-scale.png"/>
        </div>
        <div className="en-div5-desc">
          <div className="en-div5-head">
            <h1 >Produce videos at scale and in‑house. Seriously easy.</h1>
          </div>
          <div className="en-div5-para">
            <h3>
              Lumen5 is an unbelievably easy to use video creator built
              specifically for users without experience in video editing. The
              workflow is as simple as creating a PowerPoint presentation, and
              the output can be indistinguishable from professional
              agency-produced videos.</h3>
              <h3>
              You can create professional video from any
              text-based content and cut video creation time to an average of
              six minutes in Lumen5. </h3>
              <h3>
              Enable your global teams to produce
              localized content for their audience as well in a snap. Just don't
              tell your boss it was this easy.</h3>
            
          </div>
        </div>
      </div>
      {/* sixth div */}
      <div className="en-div-6-cont">
        <div className="en-div5-desc">
          <div className="en-div5-head">
            <h1>Maintain full control over content and branding.</h1>
          </div>
          <div className="en-div5-para">
            <h3>
              Our team of motion graphics designers work with your brand team to
              produce a custom template unique to your visual identity, ensuring
              your videos are always on-brand no matter who is creating them for
              you. </h3> 
              <h3>With approval and permission level workflows in place, you
              can always make sure everyone's on the right path and on brand.
              Comment and leave revision requests right in the video itself,
              scene by scene, allowing for smooth team collaboration and a
              simple creation and video sharing process between team members, no
              matter if they're sitting next to you, or half a world away.
              </h3>
           
          </div>
        </div>
        <div className="en-div5-img">
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-control.png"
            alt=""
          />
        </div>
      </div>

      {/* seventh div */}
      <div className="en-div-5-cont">
        <div className="en-div5-img">
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/enterprise-support.png"
            alt=""
          />
        </div>
        <div className="en-div5-desc">
          <div className="en-div5-head">
            <h1>
              Priority support, customer success, and continuous training.
            </h1>
          </div>
          <div className="en-div5-para">
            <h3>
              Our strategic Customer Success team has worked with hundreds of
              brands on implementation and adoption. We have a strong track
              record of helping users across all departments of all enterprises
              become video creation experts. Paired with our easy-peasy UI and
              AI, your team will be pumping out expert eye catching videos in
              days. </h3>
              <h3>Onboarding is just the beginning. We'll team up with you
              throughout our partnership to offer video analysis, creative
              direction, and industry best practices to help you continuously
              push the boundaries of producing more effective video content that
              actually generates results and drives growth. We got you.
            </h3>
          </div>
        </div>
      </div>
      {/* eight div */}
      <div className="en-div8-container">
         {
          eightdiv.map((e)=>(
            <div>
              <div>
                <div className="en-div8-head"><h1>{e.title}</h1></div>
                <div className="en-div8-desc"><h3>{e.desc}</h3></div>
              </div>
              <div className="en-div8-bottom">
                <div className="en-div8-img"><img src={e.image} alt="" /></div>
                <div>
                  <h2 className="en-div8-head">{e.name}</h2>
                  <div className="en-div8-des">{e.role}</div>
                </div>
              </div>
            </div>
          ))
         }
      </div>

      {/* ninth div */}
      <section className="en-div9-main">
                <h1 className="en-div9-head">Explore videos make with Lumen5</h1>
                <div className="en-div9-btn">
                    <button id="contentmarket" value="contentmarketing" onClick={() => {setVidChabge(contentmarketvideos)}}>Content Marketing</button>
                    <button id="communicate" value="communication" onClick={() => {setVidChabge(communicationsvideos)}}>Communications</button>
                    <button id="promotion" value="promotional" onClick={() => {setVidChabge(promotionalvideos)}}>Promotional</button>
                    <button id="people" value="people" onClick={() => {setVidChabge(peopleAndculturevideos)}}>People&Culture</button>
                    <button id="local" value="localization" onClick={() => {setVidChabge(localizationvideos)}}>Localization</button>
                </div>
                <div className="en-div9-mainvideos">
                    {
                       
                    vidchange.map((url,i) => {
                        return <Video url={url} key={i}></Video>    
                    })}
                </div>               
            </section>

            {/* tenth div */}
            <section className="en-div10-main">
                    <h1 className="en-div10-head">Case studies and customer stories</h1>
                    <div className="en-div10-container">
                    <Slide className="en-div10-comp">
                        {slideImages.map((slideImage, index)=> (
                            <div className="en-div10-each-slide" key={index}>
                                <div className="slide-img" style={{'backgroundImage': `url(${slideImage.url})`}}>
                                    <span className="slide-caption">

                                        <div className="en-div10-box">
                                            <img className="background-img" src={slideImage.icon}/>
                                            <p className="p-1">{slideImage.description}</p>
                                            <p className="p-2">{slideImage.name}</p>
                                            <p className="p-3">{slideImage.title}</p>
                                            <p className="lastp"><Link to="/signUp" className="nav-linkss">Read story </Link><i class="fa-solid fa-arrow-right-long"></i></p>
                                        </div>
                                        </span>
                                    
                                </div>
                            </div>
                        ))} 
                    </Slide>                    
                    </div>
                    <div className="en-div10-compicon">   
                        {slideImages.map((slideImage,i)=>{
                            return (
                                <img className="en-div10-img" src={slideImage.icon} key={i}/>
                            )
                        })}
                    </div>
            </section>

            {/* eleventh div */}
            <section className="en-div11-main">
                <div className="en-div11-head">
                Tips and tricks for effortless
                <br/> video production
                </div >
                <div className="en-div11-para">Learn how our customers save time and<br/>
               boost engagement with Lumen5</div>
                <div className="en-div11-cards d-flex width">
                    
                    <div className="en-div11-innercard">
                        <div className="en-div11-card1 ">
                            <img className="en-div11-card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2019/05/Video-Marketing-How-to-Get-Started.jpg" alt="card"/>
                            <div className="">BLOG</div>
                            <div className="">Video Marketing: <br/>How to Get Started <br/>[Step by Step]</div>
                            <div className="">Read Story <i className="fa-solid fa-arrow-right-long"></i></div>
                            
                        </div>
                        <div className="en-div11-card1">
                        <img className="en-div11-card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2019/08/Host-an-Instagram-Takeover-in-7-Simple-Steps.jpg" alt="card"/>
                            <div className="">BLOG</div>
                            <div className="">How to Increase <br/>Your Facebook <br/>Video Views <br/>[Complete Guide]</div>
                            <div className="">Read Story <i className="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                        <div className="en-div11-card1">
                        <img className="en-div11-card-imgs" src="https://lumen5.com/learn/wp-content/uploads/2018/10/photo-1518406432532-9cbef5697723.jpeg" alt="card"/>
                            <div className="">BLOG</div>
                            <div className="">The Importance of <br/>Video in Your <br/>Content Strategy</div>
                            <div className="">Read Story <i className="fa-solid fa-arrow-right-long"></i></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* twelth div*/}

                <div className="en-div12-main">
                    {/* <div className="sec10-0"></div> */}
                    <div className="en-div12-head">
                    Join 800,000+ companies that are <br/>using Lumen5 to tell their stories.
                    </div>
                    <div className="en-div12-desc">
                    Lumen5 is a video creation software that helps marketers, <br/>publishers, and brands create video content in a breeze, <br/>without any technical expertise.
                    </div>
                    <div><button className="en-div12-btn">Request a Demo</button></div>
                </div>     
    </>
  );
};

export default EnterPrise;
