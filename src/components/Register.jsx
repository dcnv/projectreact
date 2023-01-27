import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import toast,{Toaster } from 'react-hot-toast'

const Register = () => {

    const [userData, setUserData] = useState()

    useEffect(() => {
        console.log("userData updated!!")
        if (userData) {
          const toStoreUserData = JSON.stringify(userData);
          localStorage.setItem("userData",toStoreUserData);
          toast.success("Submitted");
        }
    }, [userData])

    function submitForm(e) {
        e.preventDefault();
        // alert("Submitted")
        setUserData({
            name: "Dhanashree",
            email: 'dhan@gmail.com',
            password: 'dhan@123'
        })
        console.log(userData, "userdata here");

    }
    return (
        <div  style={{width:"70%", marginLeft:"auto"}}>
            <h1>Register Here</h1>
            <form onSubmit={submitForm}>
                <label>Name</label>
                <input type="text" placeholder='Type Your Name...' /> <br/><br/>
                <label >Email</label>
                <input type="Email" placeholder='Type Your Email Id...' /><br/><br/>
                <label htmlFor="">Password</label>
                <input type="password" placeholder='Create a password...' /><br/>
                <p> Already have an account ? <a href="./Login">Log in</a></p>
                <input  style={{marginLeft:"10%"}}id='button' type="Submit"  />

            </form>
        </div>
    )
}


export default Register