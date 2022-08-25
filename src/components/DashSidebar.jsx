import { Box, Button, Flex, HStack, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Spacer,  Stack,  Text, useDisclosure, VStack } from '@chakra-ui/react'
import { useSearchParams } from "react-router-dom"
import React, { useEffect, useState } from 'react'


const DashSidebar = () => {
  let [searchparams, setSearchparams] = useSearchParams()
  let [params, setparams] = useState(searchparams.getAll("query")[0] || "")
  const { isOpen, onOpen, onClose } = useDisclosure()
  useEffect(() => {
    setSearchparams(
      {
        query: params
      }
    )
  }, [setSearchparams, params])
console.log(searchparams.getAll("query")[0])
  return (
    <Box position="fixed" top="10vh" left="0px" h="88.5vh" w={["25%","20%"]} border="1px solid rgba(0,0,0,0.1)" fontWeight="semibold" pt="10px" fontSize={["30%", "53%", "80%"]} color="#7e889a">
      <VStack align="stretch" spacing="0px" >
        <Box onClick={() => setparams("Allvedios")} color={searchparams.getAll("query")[0] === "Allvedios" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "20px"]} >
          <HStack spacing={["3px", "7px", "10px"]} ><i className="fa-solid fa-clapperboard"></i> <Text > All vedios</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Instantvedios")} color={searchparams.getAll("query")[0] === "Instantvedios" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "20px"]}>
          <HStack spacing={["3px", "7px", "10px"]}><i className="fa-solid fa-film"></i> <Text > Instant vedios</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Brandkits")} color={searchparams.getAll("query")[0] === "Brandkits" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "20px"]}>
          <HStack spacing={["3px", "7px", "10px"]}> <i className="fa-solid fa-palette"></i> <Text > Brand kits</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Savedtemplates")} color={searchparams.getAll("query")[0] === "Savedtemplates" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "20px"]}>
          <HStack spacing={["3px", "7px", "10px"]}><i className="fa-solid fa-chart-column"></i><Text > Saved templates</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Analytics")} color={searchparams.getAll("query")[0] === "Analytics" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "20px"]}>
          <HStack spacing={["3px", "7px", "10px"]}><i className="fa-solid fa-chart-simple"></i> <Text > Analytics</Text></HStack>

        </Box>
        <Box onClick={() => setparams("Trash")} color={searchparams.getAll("query")[0] === "Trash" && "blue"} _hover={{ bgColor: "#fafafb" }} p="10px" pl={["5px", "10px", "20px"]}>
          <HStack spacing={["3px", "7px", "10px"]}><i className="fa-solid fa-trash"></i> <Text > Trash</Text></HStack>

        </Box>
      </VStack>
      <Stack  justifyContent="space-between" p={["0px 5px 0px 5px", "0px 10px 0px 10px", "0px 15px 0px 15px"]} direction={"row"} mt={["30px", "40px", "50px"]}>
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
              <Input pl={["10px"]} minW={["100%"]} maxH={["18px","30px","50px"]} fontSize={["10px","15px","20px"]} variant="flushed" placeholder="Name your project"></Input>
            </ModalBody>

            <ModalFooter>
              <Button  fontSize={["10px","20px","15px"]} mr={[0,3]} p={["15px","18px","22px"]} maxH={["8px"]} borderRadius={["20px","50px"]} onClick={onClose}>
                Cancel
              </Button>
              <Button p={["15px","18px","22px"]} maxH={["8px"]} borderRadius={["20px","50px"]} bg="blue" fontSize={["10px","15px"]} variant='ghost'>Create</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Stack>
    </Box>
  )
}

export default DashSidebar