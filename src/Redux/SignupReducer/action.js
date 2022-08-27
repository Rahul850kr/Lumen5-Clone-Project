import { getData, setData } from "../../utils/localstorage"
import * as types from "./actionTypes"


export const signup=(userData)=>(dispatch)=>{
    dispatch({type:types.SIGNUP_REQUEST})
    let data = getData("userDetails") || [];
    data.push(userData);
    setData(data)
    dispatch({type:types.SIGNUP_SUCCESS,payload:data})
}

