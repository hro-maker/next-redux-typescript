import { useRouter } from 'next/dist/client/router';
import React from 'react';
import Navbarr from '../components/navbar';

const Paplicroutes:React.FC = ({children}) => {
    let token=null
    if(process.browser){
        token=JSON.parse(localStorage.getItem("token"))
    }
    if(!token && process.browser){
        const router=useRouter()
        router.push("/auth/login")
    }
    return (
        <div>
            <Navbarr islogin={true}/>
            {children}
        </div>
    );
}

export default Paplicroutes;
