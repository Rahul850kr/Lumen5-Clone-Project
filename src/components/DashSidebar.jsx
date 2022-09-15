import { Box, Button,  HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer,  Stack,  Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addprojects, deleteprojects, getprojects } from "../Redux/ProjectReducer/action"
import { DeleteIcon } from '@chakra-ui/icons'
import { useToast } from '@chakra-ui/react'

export let color=[
  "#5846f6","#02d3da","#02d3da","#49d66e","#49d66e","#ffa101","#ffa101","#ffa101","#ffa101","#017d9c","#017d9c","#249a5a","#106eb7","#106eb7","#b71c26","#5d6575"
]


const DashSidebar = () => {
  let dispatch=useDispatch()
  let {data}=useSelector(state=>state.projectreducer)
  const toast = useToast()
  let [searchparams, setSearchparams] = useSearchParams()
  let [params, setparams] = useState(searchparams.getAll("query")[0] || "")
  let [title,settitle]=useState("")
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(()=>{
dispatch(getprojects())
  },[dispatch])
  console.log(data)
  useEffect(() => {
    if(params){
    setSearchparams(
      {
        query: params
      }
    
    )
    }
  }, [setSearchparams, params])
  let createproject=()=>{
    
    dispatch(addprojects({title:title,color:color[Math.floor((Math.random()*color.length))]})).then((res)=>dispatch(getprojects()))
    onClose()
  }

  let deleteproject=(item)=>{
    dispatch(deleteprojects(item)).then((res)=>dispatch(getprojects()))
  }
console.log(searchparams.getAll("query")[0])
  return (
    <Box position="fixed" top="80px" left="0px" h="88.5vh" w={["25%","20%"]} border="1px solid rgba(0,0,0,0.1)" fontWeight="semibold" pt="10px" fontSize={["30%", "53%", "90%"]} color="#7e889a">
      <VStack align="stretch" spacing="0px" >
        <Box onClick={() =>{
         
          setparams("Allvedios")}} color={searchparams.getAll("query")[0] === "Allvedios"  ? "blue": searchparams.getAll("query")[0] === undefined && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "10px"]} >
          <HStack spacing={["3px", "7px", "10px"]} ><i className="fa-solid fa-clapperboard"></i> <Text > All vedios</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Instantvedios")} color={searchparams.getAll("query")[0] === "Instantvedios" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "10px"]}>
          <HStack spacing={["3px", "7px", "10px"]}><i className="fa-solid fa-film"></i> <Text > Instant vedios</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Brandkits")} color={searchparams.getAll("query")[0] === "Brandkits" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "10px"]}>
          <HStack spacing={["3px", "7px", "10px"]}> <i className="fa-solid fa-palette"></i> <Text > Brand kits</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Savedtemplates")} color={searchparams.getAll("query")[0] === "Savedtemplates" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "10px"]}>
          <HStack spacing={["3px", "7px", "10px"]}><i className="fa-solid fa-chart-column"></i><Text > Saved templates</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Analytics")} color={searchparams.getAll("query")[0] === "Analytics" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "10px"]}>
          <HStack spacing={["3px", "7px", "10px"]}><i className="fa-solid fa-chart-simple"></i> <Text > Analytics</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Trash")} color={searchparams.getAll("query")[0] === "Trash" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "10px"]}>
          <HStack spacing={["3px", "7px", "10px"]}><i className="fa-solid fa-trash"></i> <Text > Trash</Text></HStack>

        </Box>
      </VStack>
      <Stack  justifyContent="space-between" p={["0px 5px 0px 5px", "0px 10px 0px 10px", "0px 20px 0px 15px"]} direction={"row"} mt={["30px", "40px", "50px"]}>
        <Text textAlign={["left"]}>Projects</Text>
        
<Spacer/>
        <Button onClick={onOpen} bg="white" p="0px" border="1px solid black" borderRadius={["50px", "30px", "50px"]} maxW={["5px", "10px", "50px"]} maxH={["10px", "10px", "30px"]} fontSize={["5px", "7px", "10px"]}>+Add</Button>


        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent mt={["55%","25%","15%"]} maxW={["70%","50%","40%"]} h={["120px","180px","230px"]} >

            <ModalHeader borderBottom={"1px solid #ebecf0"} p={["10px","10px","15px"]} fontSize={["10px","20px","25px"]}>Create Project</ModalHeader>

            <ModalCloseButton   mt={["-10px","5px","10px"]}  fontSize={["7px","15px","15px"]} />

            <ModalBody p={["0px","20px","15px"]}>
              {/* <Lorem count={2} /> */}
              {/* <TagLabel>Project name</TagLabel> */}
              <Text></Text>
              <Input onChange={(e)=>settitle(e.target.value)} pl={["10px"]} minW={["100%"]} maxH={["18px","30px","50px"]} fontSize={["10px","15px","20px"]} variant="flushed" placeholder="Name your project"></Input>
            </ModalBody>

            <ModalFooter>
              <Button  fontSize={["10px","20px","15px"]} mr={[0,3]} p={["15px","18px","22px"]} maxH={["8px"]} borderRadius={["20px","50px"]} onClick={onClose}>
                Cancel
              </Button>
              <Button p={["15px","18px","22px"]} onClick={()=>{
                createproject()
                if(data.length>0||title.length>0){
                toast({
                  position: 'top-center',
                  title: 'Hurray',
                  description: `${title} has been successfully created`,
                  status: 'success',
                  duration: 5000,
                  isClosable: true,
                })
              }else{
                toast({
                  position: 'top-center',
                  title: 'warning',
                  description: `Invalid information`,
                  status: 'success',
                  duration: 9000,
                  isClosable: true,
                })
              }
                }} maxH={["8px"]} borderRadius={["20px","50px"]} bg="blue" fontSize={["10px","15px"]} variant='ghost'>Create</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
     
      {data.map((item)=>{
        return <HStack key={item.id} onClick={()=>{
          
        }}  spacing="10px" mt="10px" mb="10px" p={["0px 5px 0px 5px", "0px 10px 0px 10px", "0px 10px 0px 15px"]}>
          <Box  w={["15px","25px","30px"]} h={["15px","25px","30px"]} borderRadius={"5px"} bgColor={item.color}></Box>
          <Text>{item.title}</Text>
          <DeleteIcon onClick={()=>{
            deleteproject(item)
           
              toast({
                position: 'top-center',
                title: 'Hurray',
                description: `${item.title} was successfully deleted`,
                status: 'success',
                duration: 9000,
               
                isClosable: true,
              })
           
            }}></DeleteIcon>
        </HStack>
      })}
      
    </Box>
  )
}

export default DashSidebar