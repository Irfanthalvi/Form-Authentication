import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { NavLink} from 'react-router-dom';

function Home() {
const [input,setinput]=useState({
    name:"",
    email:"",
    date:"",
    password:""
})
const [data,]=useState([]);
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

    const  {name,email,date,password} = input;

    if(name===""){
        alert("name field is required")
    }else if(email===""){
        alert("email field is required")
    }else if(!email.includes("@")){
        alert("please enter valid email address")
    }else if(date===""){
        alert("ndate field is required")
    }else if(password===""){
        alert("password field is required")
    }else if(password.length < 5){
        alert("password length greater then 5 chr")
    }else{
        alert("data added successfully")

        localStorage.setItem("useryoutube",JSON.stringify([...data,input]));
    }
}

    return (
        <>
            <div className='container'>
                <section>
                    <div className='left_data'>
                        <h3 className='app col-lg-4'>Sign Up</h3>
                        <div>
                            <Form>
                                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text"name='name' onChange={getdata} placeholder="Enter Your name " />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                    <Form.Label>Email address</Form.Label>
                                    <Form.Control type="email" name='email' onChange={getdata}  placeholder="Enter email" />
                                </Form.Group>
                                <Form.Group className="mb-3 col-lg-4" controlId="formBasicEmail">
                                    <Form.Label>Date</Form.Label>
                                    <Form.Control onChange={getdata} name='date' type="date" />
                                </Form.Group>

                                <Form.Group className="mb-3 col-lg-4" controlId="formBasicPassword">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" name='password' onChange={getdata}  placeholder="Password" />
                                </Form.Group>

                                <Button onClick={addData} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                            <p className='mt-3'>Already Have And Account<span><NavLink to="/login">SignIn</NavLink></span></p>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Home