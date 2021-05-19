import axios from "axios"
import { authactions } from "../../types/authreducer"
import { axioss } from "../../utils.axiosinstance"
import jwt_decode from "jwt-decode";
interface userr{
    email:string,
    password:string
}
export const login = (user:userr)=>{
    return async dispatch=>{
            dispatch({type:authactions.authenticate_request})
       await axioss.post('/auth/login',user).then((res)=>{
           process.browser && localStorage.setItem("token",JSON.stringify(res.data.token))
        dispatch({type:authactions.authenticate_success,payload:res.data,message:"authenticate success"})
       }).catch((err)=>{
           dispatch({type:authactions.authenticate_failure,payload:err.message,message:err.message})
       })
    }
}
export const clearmessage=()=>{
            return dispatch=>{
                dispatch({type:authactions.clear_message})
            }
}
export const register = (user:userr)=>{
    return async dispatch=>{
        dispatch({type:authactions.authenticate_request})
       await axioss.post("/auth/register",{...user}).then((res)=>{
        dispatch({type:authactions.authenticate_success,payload:res.data,message:"authenticate success"})
       }).catch((err)=>{
           dispatch({type:authactions.authenticate_failure,payload:err.message})
       })
    }
}
interface Iuse{
    id:string,
    username:string
}
export const Isuserlogin=()=>{
    return dispatch =>{
        let user
        let token
        if(process.browser){
            token = JSON.parse(localStorage.getItem("token"))
        }
        if(token){
                let decode:Iuse=jwt_decode(token)
                const {id,username}=decode
                dispatch({type:authactions.authenticate_success,payload:{token,user:{id,username}}})
        }else{
            dispatch({type:authactions.authenticate_failure,payload:"you are dont registret"})
        }
    }
        
}