import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import  toast  from 'react-hot-toast';
import {useNavigate} from 'react-router-dom';

const Login = () => {
  const[userLogInData, setUserLogInData]= useState();
  const router = useNavigate();
  

  useEffect(() => {
    if (userLogInData) {
      const registeredData = JSON.parse(localStorage.getItem("userData"));
      console.log(registeredData)
      if(registeredData, "registeredData here")
      if (registeredData){
        if(registeredData.email=== userLogInData.email&& registeredData.password === userLogInData.password){
       localStorage.setItem("IsUserLogged","true");
          router('/');

         toast.success("Login Succesfull!")
        }else {
          toast.error("Wrong Credentials!")
        }
        }else{
      toast.error("user not found, Register.")
     }
    }
}, [userLogInData])

useEffect (()=>{
    const localstorageData = localStorage.getItem("IsUserLogged");
    if(localstorageData){
      router('/');
    }
},[])

     function handleSubmit (e){
      e.preventDefault();
      // alert("Login working!")
    setUserLogInData({
     email: "dhan@gmail.com",
     password :"dhan@123"
  })

     }
     
   
  return (
    <div  style={{width:"70%", marginLeft:"auto"}}>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
      <label>Email</label>
      <input type="email" placeholder='email...' /> <br/><br/>
      <label >Password</label>
      <input type='password'/><br/><br/>
      <input  type='submit'/><br/>
      <a href='./register'>Not user?  Register here..</a>
      </form><br/>
    </div>
   )
}


export default Login
