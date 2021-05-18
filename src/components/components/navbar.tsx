
import React, { FC } from 'react';
import { Button, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
interface Navbarprops {
    islogin: boolean
}
const Navbarr: FC<Navbarprops> = ({ islogin=false }) => {
    const router=useRouter()
    const logout=()=>{
        if(process.browser){
            localStorage.removeItem("token")
            router.push('/auth/login')
        }
    }
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto df">
                    {islogin 
                    ? <><Link href="/"><a className="nav-link">Home</a></Link>
                        <Link href="/posts"><a className="nav-link nav-link-mr">posts</a></Link>
                        <Button className="logout_btn primery" onClick={logout} >logout</Button></>
                        
                     :   <><Link href="/auth/login"><a className="nav-link">login</a></Link> 
                     <Link href="/auth/register"><a className="nav-link">register</a></Link></>}

                </Nav>
               
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Navbarr;
