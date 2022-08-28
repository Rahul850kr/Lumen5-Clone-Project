import { Badge, Box, Button, Checkbox, Flex, Input, Popover,  PopoverBody, PopoverContent,  PopoverTrigger, Spacer, Text, VStack } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { CalendarIcon, CopyIcon, DeleteIcon, DownloadIcon, EditIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { updatestaus } from '../Redux/AppReducer/action'

const AddNewVedio = ({ title, badge ,setcount,item}) => {
  let {Currvideo}=useSelector(state=>state.AppReducer)
  
  let [hover, sethover] = useState(false)
  let [input, setinput] = useState(false)
  
  let vedio = useRef(null)
  useEffect(() => {
    let length=Currvideo.filter((el)=>el.status===true).length
    if(Currvideo.length==0){
      setcount(0)
    }
    
    setcount(length)
   }, [item.status,Currvideo])
  let dispatch=useDispatch()
  let [edittitile] = useState("Untitled vedio")
 




  
  return (
    <Box  boxSizing='border-box' boxShadow='lg' rounded='md' bg='white' fontSize={["10%", "40%", "90%"]}  w={["100%", "100%", "100%"]} minH={["120px", "200px", "260x"]} borderRadius="10px" >
      <VStack spacing={["8px", "12px", "18px"]} textAlign="left" align='stretch' pt="0px">
        <Box >
          <Box position="relative">
          <video onClick={() => setinput(false)} style={{ minHeight: "20%", width: "100%",borderRadius:"10px" }} left="0px" onMouseOver={() => {
            vedio.current.play()
            sethover(true)
          }} onMouseLeave={() => {
            vedio.current.pause()
            sethover(false)
          }} ref={vedio} muted preload='auto' loop  >
            <source src={item.vediourl} >

            </source>
            Your browser does not support the video tag.
          </video>
          {
            hover ||item.status? <Checkbox  defaultChecked={item.status}  onChange={(e)=>{
              // setcheck(!value)
              dispatch(updatestaus(e.target.checked,item.id))
             console.log(e.target.checked)
             
            }} size={['sm',"md","md"]} onMouseOver={() => sethover(true)} onMouseLeave={() => sethover(false)} position="absolute" top="10%" left="85%" colorScheme='green' outline="1px solid blue"></Checkbox> : null
          }
          {
            hover ? <Box onMouseOver={() => sethover(true)} onMouseLeave={() => sethover(false)} left="0px" backgroundColor="#7d8084" color="white" position="absolute" w="100%" top={["90%","90%","90%"]} textAlign="center"> <Text >Edit</Text></Box> : null
          }
</Box>
          {
            input ? <Input onKeyDown={(e)=>console.log(e)} mt={["10px", "7px", "10px"]} p="0px 10px 0px 10px" h={["","","20px"]} fontSize={["5px","10px","15px"]} defaultValue={title || edittitile} variant="flushed"></Input> : <Text p="0px 10px 0px 10px" fontSize={["5px","10px","15px"]} mt={["10px", "7px", "10px"]} onClick={() => setinput(true)}>{item.title || edittitile}<EditIcon></EditIcon></Text>

          }

        </Box>
        <Box p="0px 10px 0px 10px" onClick={() => setinput(false)}>

          <Badge w="fit-content" fontSize={["10%", "50%", "100%"]} backgroundColor="#9faabf" color="white" >{badge || "Draft"}</Badge>
        </Box>
        <Flex p={["0px 5px 5px 5px", "0px 7px 5px 7px", "0px 10px 5px 10px"]}>
          <Box>
            <Text fontSize={["5px", "7px", "12px"]} fontWeight="semibold" color="#c8cbd9"><CalendarIcon />  No Project
            </Text>
          </Box>
          <Spacer />
          <Popover placement='top'>
            <PopoverTrigger>
              {/* <SettingsIcon/> */}
              <Button   bg="white" pb={["10px", "7px", "10px"]} maxH={["10px", "20px"]} maxW={["4px", "10px"]} _hover={{ backgroundColor: "white", border: "1px solid black", borderRadius: ["20px", "30px", "50px"], bg: "white" }}>...</Button>

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