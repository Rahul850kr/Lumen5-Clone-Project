export const setData = (data)=>{
   return localStorage.setItem("userDetails",JSON.stringify(data))
}

export const getData = ()=>{
    return JSON.parse(localStorage.getItem("userDetails"))
}