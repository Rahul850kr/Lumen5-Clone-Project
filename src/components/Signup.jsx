import React from "react";
import style from "./Signup.module.css";
import { Link } from "react-router-dom";
import { Flex, Input, Spacer, Text, VStack } from "@chakra-ui/react";

const Signup = () => {
  return (
    <div className={style.mainDiv}>
      <div className={style.sidebar}>
        <Link to={`/`}>
          <img
            className={style.logo}
            src="https://storage.googleapis.com/lumen5-site-images/L5-logo/logo-white_266x156.png"
            alt=""
          />
        </Link>
        <Text className={style.superCharge}>
          Supercharge your content strategy
        </Text>
        <Text className={style.secondTextInSideBar}>
          Join 800,000+ brands creating videos with Lumen5
        </Text>
        <div className={style.companyLogo}>
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-seimens-white.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sf-white.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-merck-white.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-sap-white.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-kpmg-white.png"
            alt=""
          />
          <img
            src="https://storage.googleapis.com/lumen5-site-images/website-assets/logo-cisco-white.png"
            alt=""
          />
        </div>
      </div>
      <div className={style.rightDiv}>
        <div className={style.signupinfo}>
          <Link to={`/`}>
            <img
              className={style.infoLogo}
              src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-color-default.svg"
              alt=""
            />
          </Link>
          <Text className={style.secondDiv_head}>
            Get started with a free account
          </Text>

          <VStack className={style.vstack} marginTop={`70px`} alignItems="left">
            <Text className={style.cat} textAlign={`left`}>FULL NAME</Text>
            <Input variant="flushed" type="text" />
            <Text className={style.cat}  textAlign={`left`}>WORK EMAIL</Text>
            <Input variant="flushed" type="email" />
            <Flex>
              <Text className={style.cat}  textAlign={`left`}>PASSWORD</Text>
              <Spacer />
              <Flex alignItems="center" gap="10px">
                <i className="fa-solid fa-eye"></i>
                <Text className={style.cat} >Show</Text>
              </Flex>
            </Flex>
            <Input variant="flushed" type="password" />
          </VStack>
          <div className={style.passwordCondition}>
            <div className={style.passwordCondition_innerDiv}>
              <li>One lowercase character</li>
              <li>One uppercase character</li>
            </div>
            <div className={style.passwordCondition_innerDiv}>
              <li> 8 characters minimum</li>
              <li>Contains a number or symbol</li>
            </div>
          </div>
          <button className={style.signup_btn}>Create Account</button>
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>Or</p>
          <button className={style.fbSignup}>
            {" "}
            <i className="fa-brands fa-square-facebook"></i> Sign up with
            Facebook
          </button>
          <p
            style={{
              textAlign: "left",
              marginTop: "40px",
              marginBottom: "30px",
            }}
          >
            Already have a Lumen5 account?{" "}
            <Link to={`/login`}>
              <span style={{ color: "#5846f6", textDecoration: "underline" }}>
                Login
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
