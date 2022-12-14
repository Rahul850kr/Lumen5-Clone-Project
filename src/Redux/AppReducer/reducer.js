import * as types from "./actionTypes";
let untitlevedios=JSON.parse(localStorage.getItem("untitlevedios"))
const initState={Currvideo:untitlevedios||[]};

export const reducer = (state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.VIDEO_SUCCESS:
            let number=state.Currvideo.length===0 ? 1 :state.Currvideo[state.Currvideo.length-1].id+1

           let x=[...state.Currvideo,{vediourl:payload,title:"Untitled vedio",status:false,id:number}]
           localStorage.setItem("untitlevedios",JSON.stringify(x))
           console.log("VIDEO_SUCCESS")
            return {...state,Currvideo:x};

            case types.UPDATE_STATUS:{
                let updatedstatus=state.Currvideo.map((el)=>{
                    if(el.id===payload.id){
                    el.status=payload.status
                    }
                   return el 
                })
                localStorage.setItem("untitlevedios",JSON.stringify(updatedstatus))
                console.log("UPDATE_STATUS")
                return {...state,Currvideo:updatedstatus}
            }
            case types.UPDATE_ALLSTATUS :{
                let updatedallstatus=state.Currvideo.map((el)=>{
                    el.status=payload
                    return el
                })
                localStorage.setItem("untitlevedios",JSON.stringify(updatedallstatus))
                console.log("UPDATE_ALLSTATUS")
                return {...state,Currvideo:updatedallstatus}
            }
            case types.DELETE_VEDIO :{
             let deleted=state.Currvideo.filter((el)=>el.status!==true)
localStorage.setItem("untitlevedios",JSON.stringify(deleted))
console.log("DELETE_VEDIO")
             return {...state,Currvideo:deleted}
            }
            case types.COPY_VEDIO :{
                let number=state.Currvideo[state.Currvideo.length-1].id+1
// let arr=state.Currvideo.slice(0)
let x=state.Currvideo.map((el,index)=>{
   
    return {...el}
})
let y=x.filter((el)=>el.status===true).map((ty,ind)=>{
    if(ty.status===true){
        ty.id=number+ind
        ty.status=false
    }
    return ty
})
let copied=[...state.Currvideo,...y]
localStorage.setItem("untitlevedios",JSON.stringify(copied))
                console.log(state.Currvideo,x,number,y)
return {...state,Currvideo:copied}
               
            }
            case types.LAST_CREATED :{
                return {...state,Currvideo:state.Currvideo.length>0?[state.Currvideo[state.Currvideo.length-1]]:state.Currvideo}
            }
            case types.LAST_MODIFIED :{
                return {...state,Currvideo:state.Currvideo.length>1?[state.Currvideo[state.Currvideo.length-1]]:state.Currvideo}
            }
           
        default:
            return state;
    }
}