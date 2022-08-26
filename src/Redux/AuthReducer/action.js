// import { getData, setData } from "../../utils/localstorage";
import * as types from "./actionTypes";
import { useSelector } from "react-redux";


export const loginSuccess=(data)=>(dispatch)=>{
    dispatch({type:types.LOGIN_SUCCESS,payload:data})
}


