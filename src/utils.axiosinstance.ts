import axios from "axios";
import { api } from "./urlconfig";

let token
if(process.browser){
    token=localStorage.getItem("token")
    token=JSON.parse(token!)
}

export const axioss=axios.create({
    baseURL:api,
    headers:{
            Authorization:token?`Bearer ${token}`:''
    }
})