import * as types from "./actiontype"
let intialstate={
    data:[],
    isLoading:false,
error:false,
deletesucess:false
}


export let projectreducer=(state=intialstate,{type,payload})=>{
switch(type){
    case types.GET_PROJECTS_LOADING :{
        return {...state,isLoading:true}
    }
    case types.GET_PROJECTS_SUCESS :{
        console.log(payload)
        return {...state,isLoading:false,data:payload}
    }
    case types.GET_PROJECTS_ERROR :{
        return {...state,isLoading:false,error:true}
    }
    case types.DELETE_PROJECTS_SUCESS:{
        if(payload){
        return {...state,deletesucess:true}
        }
        else{
            return state
        }
    }
    default :
    return state
}
}