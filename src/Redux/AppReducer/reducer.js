import * as types from "./actionTypes";

const initState={Currvideo:""};

export const reducer = (state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.VIDEO_SUCCESS:
            return {...state,Currvideo:payload};
        default:
            return state;
    }
}