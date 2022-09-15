import { Box, Grid } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import AddNewVedio from './AddNewVedio'
import DefaultNewVedio from './DefaultNewVedio'

const DashBody = ({setcount}) => {
  let {Currvideo}=useSelector(state=>state.AppReducer)
useEffect(() => {
  if(Currvideo.length===0){
setcount(0)
  }

  
}, [Currvideo])

 console.log(Currvideo)
  return (
    
    <Box bg="#f0f0f4" minH="100vh"  padding="20px 10px 20px 10px" h="100%" w="100%" position="relative" top={["0px","25px","59px"]}  >

{
  
  <Grid templateColumns={['repeat(3, 1fr)','repeat(3, 1fr)','repeat(4, 1fr)']} gap={[1,3,6]}>
 <DefaultNewVedio height={Currvideo.length==0?"300px":"100%"}></DefaultNewVedio>
 {Currvideo.length>0&&Currvideo.map((item)=> item ? <AddNewVedio  key={item.id} item={item}  setcount={setcount}></AddNewVedio> :null)}
 
 
  
 
</Grid>
}


    </Box>
  )
}

export default DashBody