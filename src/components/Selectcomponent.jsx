import { ChevronDownIcon, CopyIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'

const Selectcomponent = ({count,setselection}) => {
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
    <MenuItem onClick={()=>setselection(true)}>Select All</MenuItem>
    <MenuItem onClick={()=>setselection(false)}>Deselect All</MenuItem>
    
  </MenuList>
</Menu>
<Tooltip hasArrow label='copy' bg='black' color='white'>
 
  <CopyIcon/>
</Tooltip>
<Tooltip hasArrow label='delete' bg='black' color='white'>
 
  <DeleteIcon/>
</Tooltip>
</HStack>
  </Box>
  )
}

export default Selectcomponent
