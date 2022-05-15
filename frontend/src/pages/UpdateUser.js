import React, {useStatem, useContext, useState} from 'react'
import { useAuthContext } from '../contexts/AuthContext';
import DeleteUser from '../components/DeleteUser';
import NavBar from '../components/NavBar';

const UpdateUser = () => {

    const {userInfo, setUserInfo} = useAuthContext()

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

    const updateUser = (event) => {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name: nameValue, userName: userNameValue, email: emailValue, password: passwordValue })
          };
    
          fetch('/auth/update', requestOptions)
          .then(res => res.json())
          .then(data => {console.log(data)
          setUserInfo({name: data.name, userName: data.userName, email: data.email})})
          resetValues()
          .catch(error => console.log(error))
          event.preventDefault();
  

    }

    return (
        <div>
        <h1>UPDATE INFO</h1>
            
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
        

            <button type="submit" onClick={updateUser}>Update</button>
            <DeleteUser/>
        </div>
    )
}
export default UpdateUser