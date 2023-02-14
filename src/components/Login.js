import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Signimg from './SIgn_img'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { NavLink } from 'react-router-dom'

const Login = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        email: "",
        password: ""
    })

    const getdata = (e) => {
        // console.log(e.target.value);
        const { value, name } = e.target;
        // console.log(value,name);
        setInpval(() => {
            return {
                ...inpval,
                [name]: value
            }
        })
    }
    const addData = (e) => {
        e.preventDefault();

        const getuserArr = localStorage.getItem("usersignup");
        console.log(getuserArr);
        const { email, password } = inpval;

        // Email
        if (email === "") {
            toast.error('Email Field is Requred', {
                position: "top-center"
            });
        } else if (!email.includes("@gmail.com")) {
            toast.error('Plz Enter Valid Email Addres', {
                position: "top-center"
            });
    }  


        // Password
        else if (password === "") {
            toast.error('Password Field is Requred', {
                position: "top-center"
            });
        } else if (password.length < 8 || password.length > 8 )  {
            toast.error('Password Must Be 8 Characters ',{
               position: "top-center"
           });
       }
    
              else {

            if (getuserArr && getuserArr.length) {
                const userdata = JSON.parse(getuserArr);
                const userlogin = userdata.filter((el, k) => {
                    return el.email === email && el.password === password 
                });

                if (userlogin.length === 0) {
                    alert('Not a member please signup')
                    // alert("invalid details")
                } else {
                    console.log("user login succesfulyy");
                    localStorage.setItem("userlogin", JSON.stringify(userlogin))
                    history("/details")
                }
            }
        }
    }
    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign IN</h3>
                        <Form >

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        {/* <p classNameNameName='mt-3'>Already Have an Account <span>SignIn</span> </p> */}
                        <p className='mt-3'>Not a member? <span><NavLink to="/">SignUp now</NavLink></span></p>

                    </div>
                    <Signimg />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default Login