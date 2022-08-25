import { Badge, Box, Button, Checkbox, Flex, Input, Popover,  PopoverBody, PopoverContent,  PopoverTrigger, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useRef, useState } from 'react'
import { CalendarIcon, CopyIcon, DeleteIcon, DownloadIcon, EditIcon, ExternalLinkIcon } from '@chakra-ui/icons'

const AddNewVedio = ({ title, badge }) => {
  let [hover, sethover] = useState(false)
  let [input, setinput] = useState(false)
  let [edittitile] = useState("Untitled vedio")
  let vedio = useRef(null)
  return (
    <Box boxShadow='lg' rounded='md' bg='white' fontSize={["10%", "40%", "90%"]} w={["100%", "100%", "100%"]} minH={["120px", "200px", "260x"]} borderRadius="10px" >
      <VStack spacing={["8px", "12px", "18px"]} textAlign="left" align='stretch' pt="0px">
        <Box position="relative">
          <video onClick={() => setinput(false)} style={{ minHeight: "20%", width: "100%" }} left="0px" onMouseOver={() => {
            vedio.current.play()
            sethover(true)
          }} onMouseLeave={() => {
            vedio.current.pause()
            sethover(false)
          }} ref={vedio} muted preload='auto' loop  >
            <source src="https://static.airtable.com/images/homescreen/Homepage_Hero_FINAL.mp4" >

            </source>
            Your browser does not support the video tag.
          </video>
          {
            hover ? <Checkbox onMouseOver={() => sethover(true)} onMouseLeave={() => sethover(false)} position="absolute" top="10%" left="85%" colorScheme='green' outline="2px solid blue"></Checkbox> : null
          }
          {
            hover ? <Box onMouseOver={() => sethover(true)} onMouseLeave={() => sethover(false)} left="0px" backgroundColor="#7d8084" color="white" position="absolute" w="100%" top="73%" textAlign="center"> <Text >edit</Text></Box> : null
          }

          {
            input ? <Input defaultValue={title || edittitile} variant="flushed"></Input> : <Text p="0px 10px 0px 10px" mt={["5px", "7px", "8px"]} onClick={() => setinput(true)}>{title || edittitile}<EditIcon></EditIcon></Text>

          }

        </Box>
        <Box p="0px 10px 0px 10px" onClick={() => setinput(false)}>

          <Badge w="fit-content" fontSize={["10%", "50%", "100%"]} backgroundColor="#9faabf" color="white" >{badge || "Draft"}</Badge>
        </Box>
        <Flex p={["0px 5px 5px 5px", "0px 7px 5px 7px", "0px 10px 5px 10px"]}>
          <Box>
            <Text fontSize={["5px", "7px", "15px"]} fontWeight="semibold" color="#c8cbd9"><CalendarIcon />  No Project
            </Text>
          </Box>
          <Spacer />
          <Popover placement='top'>
            <PopoverTrigger>
              {/* <SettingsIcon/> */}
              <Button bg="white" pb={["10px", "7px", "10px"]} maxH={["10px", "20px"]} maxW={["4px", "10px"]} _hover={{ backgroundColor: "white", border: "1px solid black", borderRadius: ["20px", "30px", "50px"], bg: "white" }}>...</Button>

            </PopoverTrigger>
            <PopoverContent outline="none" w={["100%","100%","150px"]}>

              <PopoverBody  >
                <VStack fontSize={["7px","10px","15px"]} spacing={["6px","10px","20px"]} align="stretch">
                  <Text><ExternalLinkIcon /> Share</Text>
                  <Text><EditIcon /> Edit</Text>
                  <Text><DownloadIcon /> Download</Text>
                  <Text><CopyIcon /> Make a copy</Text>
                  <Text><DeleteIcon /> Delete</Text>
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Popover>
        </Flex>
      </VStack>
    </Box>
  )
}

export default AddNewVedio