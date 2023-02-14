import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Signimg from './SIgn_img'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {

    const history = useNavigate();

    const [inpval, setInpval] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [data,setData] = useState([]);
    console.log(inpval);

    const getdata = (e) => {
        // console.log(e.target.value)
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

        const { name, email,password } = inpval;
        console.log(password.charCodeAt(0))
        
        // Name
        if (name === "") {
            toast.error(' Name Field is Requred!',{
                position: "top-center"
            });
        } else if(name.length < 5 || name.length > 20){
            toast.error("Name Character Must Be Between 4 and 20", {
                position: "top-center"
            })
        } else if(!isNaN(name)){
            toast.error("Number are Not Allowed",{
                position: "top-center"
            })
        }



        //  Email
        else if (email === "") {
             toast.error('Email Field is Requred',{
                position: "top-center"
            });
        } else if (!email.includes("@gmail.com")) {
             toast.error('Plz Enter Valid Email Addres',{
                position: "top-center"
            });
        }





        // Password
        else if (password === "") {
             toast.error('Password Field is Requred',{
                position: "top-center"
            });
        }
        else if ( password.length  < 8 || password.length > 8){
            toast.error("Plz Enter Password Must Be 8 Characters",{
                position: "top-center"
            })
        }
        else if(password.charCodeAt(0) < 65 || password.charCodeAt(0) > 90){
            toast.error("Plz Enter First UpperCase Latter",{
                position: "top-center"
            })
        }
         
        else if(password.charCodeAt(1) < 97 || password.charCodeAt(1) > 122){
            toast.error("Plz Enter Second Four LowerCase Latter",{
                position: "top-center"
            })
        }
        else if(password.charCodeAt(2) < 97 || password.charCodeAt(2) > 122){
            toast.error("Plz Enter Second Four LowerCase Latter",{
                position: "top-center"
            })
        }
        else if(password.charCodeAt(3) < 97 || password.charCodeAt(3) > 122){
            toast.error("Plz Enter Second Four LowerCase Latter",{
                position: "top-center"
            })
        }
        else if(password.charCodeAt(4) < 97 || password.charCodeAt(4) > 122){
            toast.error("Plz Enter Second Four LowerCase Latter",{
                position: "top-center"
            })
        }

        else if(password.charCodeAt(5) < 48 || password.charCodeAt(5) > 57){
            toast.error("Plz Enter Two Numbers",{
                position: "top-center"
            })
        }
        else if(password.charCodeAt(6) < 48 || password.charCodeAt(6) > 57){
            toast.error("Plz Enter Two Numbers",{
                position: "top-center"
            })
        }
        
        // else if(password.charCodeAt(7) < 33 || password.charCodeAt(7) < 47){
        //     toast.error("Plz Enter Last Special Character",{
        //         position: "top-center"
        //     })
        // }

        else if(!password.includes('$') && !password.includes("#")){
            toast.error("Plz Enter Last Special Character ($ and #)",{
                position: "top-center"
            })
        }

        else {
            console.log("Data Added Succesfully");
            history("/login")
            localStorage.setItem("usersignup",JSON.stringify([...data, inpval]));
        }
    }
 
    return (
        <>
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3 p-3" style={{ width: "100%" }}>
                        <h3 className='text-center col-lg-6'>Sign Up</h3>
                        <Form >
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="text" name='name' onChange={getdata} placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">

                                <Form.Control type="email" name='email' onChange={getdata} placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

                                <Form.Control type="password" name='password' onChange={getdata} placeholder="Password" />
                            </Form.Group>
                            <Button variant="primary" className='col-lg-6' onClick={addData} style={{ background: "rgb(67, 185, 127)" }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Already Have an Account <span><NavLink to="/login">SignIn</NavLink></span> </p>
                    </div>
                    <Signimg />
                </section>
                <ToastContainer />
            </div>
        </>
    )
}

export default SignUp;
