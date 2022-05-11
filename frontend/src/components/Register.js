import React, {useState} from 'react'
import {NavLink, useNavigate, } from 'react-router-dom';
import NavBar from './NavBar';



const Register = () => {
    // const navigate = useNavigate();

    const [nameValue, setnameValue] = useState();
    const [emailValue, setemailValue] = useState();
    const [userNameValue, setUserNameValue] = useState();
    const [passwordValue, setpasswordValue] = useState();

    const resetValues = () => {
        setnameValue("");
        setemailValue("");
        setpasswordValue("");
        setUserNameValue("")
    }

    const registerUser = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nameValue, userName: userNameValue, email: emailValue, password: passwordValue })
          };
    
          fetch('/auth/register', requestOptions)
          .then(res => res.json())
          .then(data => console.log(data))
          resetValues()
          .catch(error => console.log(error))
          event.preventDefault();
  

    }

    return (
        <>
        <NavBar />
        <h1>Register component</h1>
            
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
        

            <button type="submit" onClick={registerUser}>Register</button>
            <NavLink  to="/auth/login">login</NavLink>

            
        </>
    )
}

export default Register