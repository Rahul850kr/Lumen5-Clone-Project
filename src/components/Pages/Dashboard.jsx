import { Box,  HStack, Select,  Stack, Text } from '@chakra-ui/react'
import React from 'react'
import DashBody from '../DashBody'
import DashSidebar from '../DashSidebar'
import NavbarAfterLogin from '../NavbarAfterLogin'


const Dashboard = () => {
  return (
    <Stack w="100%">
      <NavbarAfterLogin/>
      <Stack direction="row" spacing="0px" position="relative" top="72px">
<DashSidebar/>
<Stack position="relative" left={["25%","20%"]}  direction="column"  spacing="0px" w={["75%","80%"]} >
  <Box  h={["50px","75px","100px"]}  bg="#f0f0f4"  w={["75%","80%"]} zIndex={47} position="fixed" top="10vh" >
<HStack  h={["50px","75px","100px"]} justifyContent="space-between" w="100%" p="0px 20px 0px 20px"  >
  <Text fontSize={["80%","120%","170%"]} fontWeight="semibold">All vedios</Text>
 
  
<Select bg="white" h={["25px","30px"]} w={["45%","35%","20%"]} fontSize={["50%","70%","md"]} outline="1px solid rgba(0,0,0,0.1)" >
  <option value='Last modified'>Last modified</option>
  <option value='Last created'>Last created</option>
  <option value='Alphabetically'>Alphabetically</option>
</Select>
</HStack>


  </Box>
<DashBody/>
</Stack>

</Stack>
    </Stack>
  )
}

export default Dashboard