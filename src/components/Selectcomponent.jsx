import { ChevronDownIcon, CopyIcon, DeleteIcon } from '@chakra-ui/icons'
import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text, Tooltip } from '@chakra-ui/react'
import React from 'react'

const Selectcomponent = ({count}) => {
  return (
    <Box>
      <HStack spacing="10px">
      <Menu>
  <MenuButton  >
    <HStack spacing="10px">

    <i style={{color:"#5846f6"}} className="fa-solid fa-square-minus" ></i><Text color={"#5846f6"} fontSize={"md"} >{`${count} selected`}</Text><ChevronDownIcon />

    </HStack>
  </MenuButton>
  <MenuList minW="120px" fontSize={"13px"}>
    <MenuItem>Select All</MenuItem>
    <MenuItem>Deselect All</MenuItem>
    
  </MenuList>
</Menu>
<Tooltip hasArrow label='copy' bg='black' color='white'>
 
  <CopyIcon/>
</Tooltip>
<Tooltip hasArrow label='delete' bg='black' color='black'>
 
  <DeleteIcon/>
</Tooltip>
</HStack>
  </Box>
  )
}

export default Selectcomponent
