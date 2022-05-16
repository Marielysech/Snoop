import React, {useState} from 'react'
import {NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import DeleteUser from '../components/DeleteUser';
import NavBar from '../components/NavBar';

//MUI IMPORT
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';


const UpdateUser = () => {

    const navigate = useNavigate();

    const {userInfo, setUserInfo} = useAuthContext()

    const [nameValue, setnameValue] = useState("");
    const [emailValue, setemailValue] = useState("");
    const [userNameValue, setUserNameValue] = useState("");
    const [passwordValue, setpasswordValue] = useState("");
    const [image, setImage] = useState("");

    const resetValues = () => {
        setnameValue("");
        setemailValue("");
        setpasswordValue("");
        setUserNameValue("");
        setImage("")
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
          navigate('/', {replace:true})
          .catch(error => console.log(error))
          event.preventDefault();
  

    }

    return (
        <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <h1>Settings: Update your informations</h1>
        <Box component="form" noValidate onSubmit={updateUser} sx={{ mt: 3 }} textAlign="center">
            <Grid container spacing={2}  >
            <Grid item xs={12} >
               
                <TextField
                  required
                  type={"file"}
                  autoFocus
                  name='image'
                //   label='Update profile picture'
                  value={image} 
                  onChange={(e) => setImage(e.target.value)}
                />
                </Grid>
                
              <Grid item xs={12} >
                <TextField
                  
                  label="Name"
                  autoFocus
                  value={nameValue} 
                  onChange={(e) => setnameValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} >
                <TextField
                  
                  label="Username"
                  value={userNameValue} 
                  onChange={(e) => setUserNameValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  label="Email Address"
                  value={emailValue} 
                  onChange={(e) => setemailValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  
                  label="Password"
                  type="password"
                  value={passwordValue} 
                  onChange={(e) => setpasswordValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
                textAlign="center"
                type="submit"
                variant="contained"
                style={{margin: "1rem"}}
                sx={{ mt: 3, mb: 2 }}
            >
                Update user info
            </Button>
           
            
          </Box>
              
            <DeleteUser/>
        </Box>
    )
}
export default UpdateUser