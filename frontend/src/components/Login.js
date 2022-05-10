import React, {useStatem, useContext, useState} from 'react'
import { useAuthContext } from '../contexts/AuthContext';
import NavBar from './NavBar';

const Login = () => {

    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

    // const navigate = useNavigate();
    const [emailValue, setemailValue] = useState();
    const [passwordValue, setpasswordValue] = useState();

    const resetValues = () => {
        setemailValue("")
        setpasswordValue("")
    }

    const loginUser = (event) => {

        event.preventDefault();

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify({ email: emailValue, password: passwordValue })
          };
    
          fetch('/auth/login', requestOptions)
          .then(res =>res.json())
          .then(data => {
            console.log(data)
            setUserInfo({name: data.name, userName: data.userName, email: data.email})
            resetValues()
            // navigate('/', {replace:true})
        })
        .catch(error => console.log(error))

    }

    
    
    return (
        <>
        <NavBar />
        <h1>Login Component</h1>
        <form >
        <div>
            <label for="email">Email</label>
            <input type="email" placeholder="Enter your email here" value={emailValue} onChange={(e) => setemailValue(e.target.value)}></input>
        </div>
        <div>
            <label for="password">Password</label>
            <input type='password' placeholder="Enter your password here" value={passwordValue} onChange={(e) => setpasswordValue(e.target.value)}></input>
        </div>
        <button type="submit" onClick={loginUser}>Login</button>
        </form>
        </>
    )
}

export default Login