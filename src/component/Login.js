import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {NavLink, useNavigate } from 'react-router-dom';

const Login = () => {

const history = useNavigate();

    const [input,setinput]=useState({
        email:"",
        password:""
    })
    console.log(input)
    
    const getdata=(e)=>{
        console.log(e.target.value)
    
    const  {value,name}=e.target;
    
    setinput(()=>{
        return {
            ...input,
            [name]:value
        }
    })
    
    }
    
    const addData =(e)=>{
        e.preventDefault();

        const getuserArr = localStorage.getItem("useryoutube")
        console.log(getuserArr);
    
        const  {email,password} = input;
    
        if(email===""){
            alert("email field is required")
        }else if(!email.includes("@")){
            alert("please enter valid email address")
        }else if(password===""){
            alert("password field is required")
        }else if(password.length < 5){
            alert("password length greater then 5 chr")
        }else{
           if(getuserArr && getuserArr.length){
            const userdata = JSON.parse(getuserArr);
            const userlogin = userdata.filter((el,k)=>{
                return el.email === email && el.password === password
            });
            if(userlogin.length===0){
                alert("invalid detail")
            }else{
                console.log("user login sucessfully");
                localStorage.setItem("user_login",JSON.stringify(userlogin))
                history("/details")
            }
                   }
        }
    }
    
    return (
        <>
      
      <div className='container'>
                <section>
                    <div className='left_data'>
                        <h3 className='app col-lg-4'>Sign In</h3>
                        <div>
                            <Form>
                                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' onChange={getdata}  placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' onChange={getdata}  placeholder="Password" />
                                </Form.Group>

                                <Button onClick={addData} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <p className='mt-3'>Already Have And Account<span><NavLink to="/Signout">Signout</NavLink></span></p>
                        </div>
                    </div>
                </section>
            </div>
</>
  )
}

export default Login