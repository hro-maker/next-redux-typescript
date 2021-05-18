import {  useFormik } from 'formik';
import { Head } from 'next/document';
import React, { useEffect } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-toastify';
import Navbarr from '../../components/components/navbar';
import Privateroute from '../../components/layouts/privateroute';
import { typetuseselector } from '../../hooks/useselector';
import { bindactions } from './../../hooks/typeaction';


const Login: React.FC = () => {
  const { login } = bindactions()
  const {register,clearmessage}=bindactions()
  const notify = (message:string) => toast(message);
  const {auth}=typetuseselector(state=>state)
  useEffect(() => {
    if(auth.message){
          notify(auth.message)
          clearmessage()
    }
}, [auth.message]);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: ""
    },
    validate: (values) => {
      interface errors {
        email?: string,
        password?: string
      }
      const errors: errors = {}
      const filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
      if (!filter.test(values.email)) {
        errors.email = "email is incorrect"
      }
      const passwordleng = values.password.trim().length
      if (passwordleng < 4 || passwordleng > 16) {
        errors.password = "incorect password"
      }
      return errors
    },
    onSubmit: values => {
      login(values)
    },
  });
  return (
    <>
    <Privateroute>
      <div className="login_wraper">
        <Form onSubmit={formik.handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control value={formik.values.email}name="email"  onChange={formik.handleChange}  placeholder="Enter email" />
            {formik.errors.email && formik.touched.email && formik.errors.email}
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control value={formik.values.password}name="password"type="password" onChange={formik.handleChange}  placeholder="Enter password" />
            {formik.errors.password && formik.touched.password && formik.errors.password}
          </Form.Group>
          <Button  variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </div>
      </Privateroute>
    </>
  );
}

export default Login;
