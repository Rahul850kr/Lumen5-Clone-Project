import { Box,  HStack, Select,  Stack, Text } from '@chakra-ui/react'
import React, { useState } from 'react'

import DashBody from './DashBody'
import DashSidebar from './DashSidebar'
import NavbarAfterLogin from './NavbarAfterLogin'
import Selectcomponent from './Selectcomponent'


const Dashboard = () => {
let [count,setcount]=useState(0)
 let [selection,setselection]=useState(false)
console.log(count)
  
  return (
    <Stack w="100%" minH="100%" >
      <NavbarAfterLogin/>
      <Stack direction="row" spacing="0px" position="relative"  top="72px">
<DashSidebar/>
<<<<<<< HEAD
<Stack position="relative" left={["25%","20%"]}  direction="column"  spacing="0px" w={["75%","80%"]} >
  <Box  h={["50px","75px","100px"]}  bg="#f0f0f4"  w={["75%","80%"]} position="fixed" top="10vh" >
=======
<Stack position="relative" left={["25%","20%"]}  direction="column" bg="#f0f0f4" minH="100%" spacing="0px" w={["75%","80%"]} >
  <Box  h={["50px","75px","100px"]}  bg="#f0f0f4"  w={["75%","80%"]} zIndex={47} position="fixed" top="10vh" >
>>>>>>> 470b3e9ac1f457ee0ea2184eadf9ce5ff7a0d511
<HStack  h={["50px","75px","100px"]} justifyContent="space-between" w="100%" p="0px 20px 0px 20px"  >
  <Text fontSize={["80%","120%","170%"]} fontWeight="semibold">All vedios</Text>
 
 { count>0 ?<Selectcomponent setselection={setselection} count={count}></Selectcomponent>:
<Select bg="white" h={["25px","30px","40px"]} w={["42%","32%","17%"]} fontSize={["50%","70%","80%"]} outline="1px solid rgba(0,0,0,0.1)" >
  <option value='Last modified'>Last modified</option>
  <option value='Last created'>Last created</option>
  <option value='Alphabetically'>Alphabetically</option>
</Select>
}
</HStack>


  </Box>
<DashBody selection={selection} setcount={setcount}/>
</Stack>

</Stack>
    </Stack>
  )
}


export default Dashboard