import * as types from "./actionTypes";

export const updatevideo=(payload)=>{
    return{
        type:types.VIDEO_SUCCESS, payload
    }
}

export const updatestaus=(status,id)=>dispatch=>{
    dispatch({type:types.UPDATE_STATUS,payload:{status,id}})
}

export const updateallstaus=(status)=>dispatch=>{
    dispatch({type:types.UPDATE_ALLSTATUS,payload:status})
}

export const deletevedio=(id)=>dispatch=>{
    dispatch({type:types.DELETE_VEDIO,payload:id})
}

export const copyvedio=()=>dispatch=>{
    dispatch({type:types.COPY_VEDIO})
}


 
