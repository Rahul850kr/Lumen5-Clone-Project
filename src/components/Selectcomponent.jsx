import { ChevronDownIcon, CopyIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, HStack, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'
import { useDispatch } from 'react-redux'
import { copyvedio, deletevedio, updateallstaus } from '../Redux/AppReducer/action'

const Selectcomponent = ({count}) => {
  let dispatch=useDispatch()
  return (
    <Box>
      <HStack spacing={["5px","10px","10px"]}>
      <Menu>
  <MenuButton  >
    <HStack fontSize={["sm","md","md"]} spacing={["5px","10px","10px"]}>

    <i style={{color:"#5846f6"}} className="fa-solid fa-square-minus" ></i><Text color={"#5846f6"} fontSize={["sm","md","md"]} >{`${count} selected`}</Text><ChevronDownIcon />

    </HStack>
  </MenuButton>
  <MenuList minW={["80px","100px","120px"]}  fontSize={"13px"}>
    <MenuItem onClick={()=>{
dispatch(updateallstaus(true))

      
      }}>Select All</MenuItem>
    <MenuItem onClick={()=>{
     
      dispatch(updateallstaus(false))
      
      }}>Deselect All</MenuItem>
    
  </MenuList>
</Menu>
<Tooltip  hasArrow label='copy' bg='black' color='white'>
 
  <CopyIcon onClick={()=>{
    dispatch(copyvedio())
  }}/>
</Tooltip>
<Tooltip hasArrow label='delete' bg='black' color='white'>
 
  <DeleteIcon  onClick={()=>{
   
    dispatch(deletevedio())
   
    
  }}/>
</Tooltip>
</HStack>
  </Box>
  )
}

export default Selectcomponent
