import * as types from "./actiontype"
import axios from "axios"

export let getprojects=()=>dispatch=>{
dispatch({type:types.GET_PROJECTS_LOADING})
axios.get("http://localhost:8080/Projects").then((res)=>dispatch({type:types.GET_PROJECTS_SUCESS,payload:res.data})).catch((res)=>dispatch({type:types.GET_PROJECTS_ERROR}))
}

export let addprojects=(params)=>dispatch=>{
dispatch({type:types.ADD_PROJECTS_LOADING})
return axios.post("http://localhost:8080/Projects",params).then((res)=>dispatch({type:types.ADD_PROJECTS_SUCESS,payload:res.data})).catch((res)=>dispatch({type:types.ADD_PROJECTS_ERROR}))
}
export let deleteprojects=(params)=>dispatch=>{
dispatch({type:types.DELETE_PROJECTS_LOADING})
return axios.delete(`http://localhost:8080/Projects/${params.id}`,{data:params}).then((res)=>dispatch({type:types.DELETE_PROJECTS_SUCESS,payload:res.data})).catch((res)=>dispatch({type:types.DELETE_PROJECTS_ERROR}))
}

