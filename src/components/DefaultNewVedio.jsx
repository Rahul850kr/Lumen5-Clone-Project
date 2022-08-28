import { Box, Text, VStack } from '@chakra-ui/react'
import React from 'react'

const DefaultNewVedio = ({width,height,bg}) => {
  return (
    <Box w={width||"100%"} h={height||"100%"} borderRadius="10px" backgroundColor={bg||"#5846f6"} >
<VStack spacing={"9%"} color="white" >
    <Text mt={"28%"} fontSize={["30px","40px","70px"]}>+</Text>
    <Text fontSize={["10px","12px","18px"]}>New Vedio</Text>
</VStack>
    </Box>
  )
}

export default DefaultNewVedio