import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import AddNewVedio from './AddNewVedio'
import DefaultNewVedio from './DefaultNewVedio'

const DashBody = ({setcount}) => {
 
  
  return (
    <Box  padding="20px 10px 20px 10px" w="100%" position="relative" top={["0px","25px","59px"]} bg="#f0f0f4" >

{
  
  <Grid templateColumns={['repeat(3, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={[1,3,6]}>
 <DefaultNewVedio></DefaultNewVedio>
  <AddNewVedio setcount={setcount}></AddNewVedio>
  <AddNewVedio setcount={setcount}></AddNewVedio>
  <AddNewVedio setcount={setcount}></AddNewVedio>
  <AddNewVedio setcount={setcount}></AddNewVedio>
  <AddNewVedio setcount={setcount}></AddNewVedio>
  <AddNewVedio setcount={setcount}></AddNewVedio>
 
</Grid>
}


    </Box>
  )
}

export default DashBody