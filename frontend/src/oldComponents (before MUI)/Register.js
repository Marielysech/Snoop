import React, {useState} from 'react'
import {NavLink, useNavigate, } from 'react-router-dom';
import NavBar from '../components/NavBar';
import axios from 'axios'



const Register = () => {
    const navigate = useNavigate();

    const [nameValue, setnameValue] = useState("");
    const [emailValue, setemailValue] = useState("");
    const [userNameValue, setUserNameValue] = useState("");
    const [passwordValue, setpasswordValue] = useState("");
    const [image, setImage] = useState("");


    const resetValues = () => {
        setnameValue("");
        setemailValue("");
        setpasswordValue("");
        setUserNameValue("")
    }

    const registerUser = (event) => {

        event.preventDefault()

        if( !nameValue || !userNameValue || !emailValue || !passwordValue || !image) {return( alert("Please fill all details"))}

        let formData = new FormData(event.target)
        formData.append('name', nameValue)
        formData.append('userName', userNameValue)
        formData.append('email', emailValue)
        formData.append('password', passwordValue)
        formData.append('image', image)


        const requestOptions = {
            method: 'POST',
            url: "/auth/register",
            headers: { 'Content-Type': 'multipart/form-data' },
            // body: formData
            data: formData
          };

            axios(requestOptions)
                .then((res) => {
                    console.log("ok", res.data)
                    resetValues()
                })
                .catch((error) => {
                    console.log( error.response )
                })

                navigate('/auth/login', {replace : true})
        //   fetch('/auth/register', requestOptions)
        //   .then(res => res.json())
        //   .then(data => console.log(data))
        //   resetValues()
        //   .catch(error => console.log(error))
          
  

    }

    return (
        <>
        <NavBar />
        <h1>Register component</h1>
            <form onSubmit={registerUser}>
                <div>
                    <label for="image">Choose a profile picture:</label>
                    <input type="file" name="image" accept="image/png, image/jpeg" value={image} onChange={(e) => setImage(e.target.value)}></input>

                </div>
                <div>
                    <label for="name">Name</label>
                    <input type="text" placeholder="Enter your name here" value={nameValue} onChange={(e) => setnameValue(e.target.value)}></input>
                </div>
                <div>
                    <label for="userName">userName</label>
                    <input type="text" placeholder="Enter your name here" value={userNameValue} onChange={(e) => setUserNameValue(e.target.value)}></input>
                </div>
                <div>
                    <label >Email</label>
                    <input type="email" placeholder="Enter your email here" value={emailValue} onChange={(e) => setemailValue(e.target.value)}></input>
                </div>
                <div>
                    <label for="password">Password</label>
                    <input type='password' placeholder="Enter your password here" value={passwordValue} onChange={(e) => setpasswordValue(e.target.value)}></input>
                </div>
        

                <button type="submit">Register</button>
            </form>
            <NavLink  to="/auth/login">login</NavLink>

            
        </>
    )
}

export default Register