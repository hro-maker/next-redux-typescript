import { useFormik } from 'formik';
import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import Privateroute from '../../components/layouts/privateroute';
import { bindactions } from './../../hooks/typeaction';
import { typetuseselector } from './../../hooks/useselector';
const Register:React.FC = () => {
    const {register,clearmessage}=bindactions()
    const notify = (message:string) => toast(message);
    const {auth}=typetuseselector(state=>state)
    useEffect(() => {
          if(auth.message){
                notify(auth.message)
                clearmessage()
          }
    }, [auth.loading]);
    const formik = useFormik({
        initialValues: {
          email: '',
          password:"",
          name:""
        },
        validate:(values)=>{
            interface errors{
                email?:string,
                password?:string,
                name?:string
            }
            const errors:errors={}
            const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if(!filter.test(values.email)){
                errors.email="email is incorrect"
            }
            const passwordleng=values.password.trim().length
            if(passwordleng <4 || passwordleng >16){
                errors.password="incorect password"
            }
            const nameleng=values.name.trim().length
            if(nameleng <4 || nameleng >16){
                errors.name="incorect name"
            }
            return errors
        },
        onSubmit: values => {
           register(values)
        },
      });
    return (
      <Privateroute>
        <div className="login_wraper">
        <form className="login_form" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">name</label>
        <input
          id="name"
          placeholder="name"
          name="name"
          onChange={formik.handleChange}
          value={formik.values.name}
        />
        {formik.errors.name && formik.touched.name && formik.errors.name}
        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          placeholder="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
         {formik.errors.email && formik.touched.email && formik.errors.email}
        <label htmlFor="password">password</label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="password"
          onChange={formik.handleChange}
          value={formik.values.password}
        />
        {formik.errors.password && formik.touched.password && formik.errors.password}
        <button type="submit">Login</button>
      </form>
      </div>
      </Privateroute>
    );
}

export default Register;
