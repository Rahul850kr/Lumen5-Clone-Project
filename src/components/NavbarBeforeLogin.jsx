import React from "react";
// import {Box,Heading} from "@chakra-ui/react"
import style from "./NavbarBeforeLogin.module.css";
import {

  Box,
  Spacer,
  Image,
  Text,
  HStack,
 
  Drawer,
  DrawerBody,
 
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

const NavbarBeforeLogin = () => {
  const [size, setSize] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <div className={style.mainDiv} >
      <div className={style.navbar_container}>
        <HStack alignItems="center">
          <Box>
            <Link to={`/`}>
              <Image
                className={style.logo}
                src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"
              />
            </Link>
          </Box>
          <Spacer />
          <Box className={style.large_screen_menu}>
            <Link to={`#`} ><Text>Pricing</Text></Link>
            <Link to={`/enterprise`} ><Text>Enterprise</Text></Link>
            <Link to={`#`} ><Text>Case Studies</Text></Link>
            <Link to={`#`}>
            <Text>
              Learn <i className="fa-solid fa-angle-down"></i>{" "}
            </Text>
            </Link>
            <Link to={`/login`} ><button className={style.loginbtn}>Login</button></Link>
            <Link to={`/signup`} > <button className={style.signupbtn}>Sign up</button></Link>
          </Box>

          <Box className={style.hamburger} onClick={() => handleClick("xs")}>
            <i style={{ fontSize: "25px" }} className="fa-solid fa-bars"></i>
            <Drawer onClose={onClose} isOpen={isOpen} size={size}>
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>
                  <Link to={`/`}>
                    {" "}
                    <Image
                      src="https://storage.googleapis.com/lumen5-site-images/L5-logo/L5-logo-header.png"
                      h="70px"
                      w="120px"
                    />
                  </Link>
                </DrawerHeader>
                <DrawerBody>
                  <VStack>
                    <Box className={style.mid_sidebar}>Pricing</Box>
                   <Link className={style.mid_sidebar} to={`/enterprise`}><Box className={style.mid_sidebar}>Enterprise</Box></Link> 
                    <Box className={style.mid_sidebar}>Case Studies</Box>
                    <Link to={`/login`} ><button className={style.loginbtn}>Login</button></Link>
                    <Link to={`/signup`} ><button className={style.signupbtn}>Sign up</button></Link>
                  </VStack>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </Box>
        </HStack>
      </div>
    </div>
  );
};

export default NavbarBeforeLogin;
