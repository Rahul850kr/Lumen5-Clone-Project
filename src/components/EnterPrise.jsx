import React, { useState } from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  Stack,
  Grid,
  GridItem,
  AspectRatio,
} from "@chakra-ui/react";
import "./EnterPriceStyle.css";

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
const EnterPrise = () => {
  const [voice, setVoice] = useState(true);
  const [unchi, setUnchi] = useState("280px");

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
      <Grid
        templateColumns="repeat(2, 1fr)"
        gap={6}
        margin="20px 150px 80px 150px"
      >
        {firstvideos.map((url, i) => {
          return (
            <GridItem>
              <Video url={url.videos} key={i}></Video>
            </GridItem>
          );
        })}
      </Grid>

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
    </>
  );
};

export default EnterPrise;
