import { Link } from "react-router-dom";
import React, { useState } from "react";
import style from "./Login.module.css";
import { Text, Flex, Input, Spacer, VStack, useToast } from "@chakra-ui/react";
import { useDispatch,useSelector } from "react-redux";
import { loginSuccess } from "../Redux/AuthReducer/action";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const data=useSelector(store=>store.SignupReducer.userDetails);
  const toast = useToast()

  const payload = {
    email,
    password
  }

  const handleLogin = ()=>{
    
    console.log(data)

    for(let i=0;i<data.length;i++)
    {
        if(data[i].email==email && data[i].password==password)
        {
          toast({
            title: "Login Successfull",
            status: "success",
            isClosable: true,
          })
            return dispatch(loginSuccess(true))
        }
    }
    alert("login failed")
    
  }



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
          <Text className={style.secondDiv_head}>Welcome Back!</Text>
          <VStack className={style.vstack} marginTop={`70px`} alignItems="left">
            <Text className={style.cat} textAlign={`left`}>
              WORK EMAIL
            </Text>
            <Input
              variant="flushed"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Flex>
              <Text className={style.cat} textAlign={`left`}>
                PASSWORD
              </Text>
              <Spacer />
              <Flex alignItems="center" gap="10px">
                <i className="fa-solid fa-eye"></i>
                <Text className={style.cat}>Show</Text>
              </Flex>
            </Flex>
            <Input
              variant="flushed"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </VStack>
          <p style={{ textAlign: "right" }}>Forgot Password?</p>
          <button onClick={handleLogin} className={style.signup_btn}>Login</button>
          <p style={{ marginTop: "20px", marginBottom: "20px" }}>Or</p>
          <button className={style.fbSignup}>
            {" "}
            <i className="fa-brands fa-square-facebook"></i> Login with Facebook
          </button>
          <button className={style.sso}>
            {" "}
            <i class="fa-solid fa-key"></i> Log in via SSO
          </button>
          <p
            style={{
              textAlign: "left",
              marginTop: "40px",
              marginBottom: "30px",
            }}
          >
            Need a Lumen5 account?
            <Link to={`/signup`}>
              <span style={{ color: "#5846f6", textDecoration: "underline" }}>
                Create an account
              </span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
