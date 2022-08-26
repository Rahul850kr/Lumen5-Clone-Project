import { Box, Grid } from '@chakra-ui/react'
import React from 'react'
import AddNewVedio from './AddNewVedio'
import DefaultNewVedio from './DefaultNewVedio'

const DashBody = () => {
 
  
  return (
    <Box  padding="20px 10px 20px 10px" w="100%" position="relative" top={["24px","49px","74px"]} bg="#f0f0f4" >

{
  
  <Grid templateColumns={['repeat(3, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={[1,3,6]}>
 <DefaultNewVedio></DefaultNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
  <AddNewVedio></AddNewVedio>
</Grid>
}


    </Box>
  )
}

export default DashBody