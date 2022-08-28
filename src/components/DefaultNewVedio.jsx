import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const DefaultNewVedio = ({width,height,bg}) => {
  let navigate=useNavigate()
  return (
    <Box  w={width||"100%"} h={height||"100%"} borderRadius="10px" backgroundColor={bg||"#5846f6"} >
<VStack onClick={()=>navigate("/Template")} spacing={"9%"} color="white" >
    <Text mt={"28%"} fontSize={["30px","40px","70px"]}>+</Text>
    <Text fontSize={["10px","12px","18px"]}>New Vedio</Text>
</VStack>
    </Box>
  )
}

export default DefaultNewVedio