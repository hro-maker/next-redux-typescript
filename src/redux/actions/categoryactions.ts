import { categoryenum } from "../../types/categoryreducer"
import { axioss } from "../../utils/axiosinstance"

export const fetchcategory=()=>{
    return async dispatch =>{
        dispatch({type:categoryenum.category_request})
        await axioss.get('/category/getall').then((res)=>{
            console.log(res.data)
                    dispatch({type:categoryenum.category_success,payload:res.data})
        }).catch((err)=>{
            dispatch({type:categoryenum.category_failure,payload:err.message})
        })
    }
}