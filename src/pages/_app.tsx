import React, {FC, useEffect, useState} from 'react';
import {AppProps} from 'next/app';
import { wrapper } from '../redux/store';
import '../styles/index.scss'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import 'bootstrap/dist/css/bootstrap.min.css';
import { typetuseselector } from './../hooks/useselector';
import { bindactions } from '../hooks/typeaction';
const WrappedApp: FC<AppProps> = ({Component, pageProps}) => 
  {
    const {Isuserlogin}=bindactions()
    const {auth}=typetuseselector(state=>state)
    const [loading,setLoading]=useState(false)
    useEffect(()=>{
        setLoading(auth.loading)
    },[auth.loading])
    useEffect(()=>{
      Isuserlogin()
    },[])
    if(loading){
      return <div>loadingggggggggggggg</div>
    }
   return  <>
      <ToastContainer />
    <Component {...pageProps} />
    </>}
;

export default wrapper.withRedux(WrappedApp);