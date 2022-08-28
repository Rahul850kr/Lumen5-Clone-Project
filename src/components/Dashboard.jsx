import { Box,  HStack, Select,  Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { lastcreated, lastmodified } from '../Redux/AppReducer/action'

import DashBody from './DashBody'
import DashSidebar from './DashSidebar'
import NavbarAfterLogin from './NavbarAfterLogin'
import Selectcomponent from './Selectcomponent'


const Dashboard = () => {
 let dispatch=useDispatch()
let [count,setcount]=useState(0)
 

 
  
  return (
   
    <Stack w="100%"  >
      <NavbarAfterLogin/>
      <Stack direction="row" spacing="0px" position="relative"  top="80px">
<DashSidebar/>
<Stack position="relative" left={["25%","20%"]}  direction="column" bg="#f0f0f4" minH="100%" spacing="0px" w={["75%","80%"]} >
  <Box  h={["50px","75px","100px"]}  bg="#f0f0f4"  w={["75%","80%"]} zIndex={47} position="fixed" top="80px" >
<HStack  h={["50px","75px","100px"]} justifyContent="space-between" w="100%" p="0px 20px 0px 20px"  >
  <Text fontSize={["80%","120%","170%"]} fontWeight="semibold">All vedios</Text>
 
 { count>0 ?<Selectcomponent   count={count}></Selectcomponent>:
<Select onChange={(e)=>{e.target.value==="Last modified"? dispatch(lastmodified()):dispatch(lastcreated())}} bg="white" h={["25px","30px","40px"]} w={["42%","32%","17%"]} fontSize={["50%","70%","80%"]} outline="1px solid rgba(0,0,0,0.1)" >
  <option value='Last modified'>Last modified</option>
  <option value='Last created'>Last created</option>
  <option value='Alphabetically'>Alphabetically</option>
</Select>
}
</HStack>


  </Box>
<DashBody  setcount={setcount}/>
</Stack>

</Stack>
    </Stack>
   
  )
}


export default Dashboard