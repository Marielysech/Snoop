import React, {useState} from 'react'
import {NavLink as RouterLink, useNavigate } from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
import DeleteUser from '../components/DeleteUser';
import axios from 'axios'

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

      event.preventDefault()

      if( !nameValue && !userNameValue && !emailValue && !passwordValue && !image) {return( alert("You must at least update one field to send out the form"))}

      const formData = new FormData(event.target)
      formData.append('name', nameValue)
      formData.append('userName', userNameValue)
      formData.append('email', emailValue)
      formData.append('password', passwordValue)
      formData.append('image', image)


      const requestOptions = {
        method: 'POST',
        url: "/auth/update",
        headers: { 'Content-Type': 'multipart/form-data' },
        // body: formData
        data: formData
      };
    
      axios(requestOptions)
          .then((res) => {
              console.log("ok", res.data)

              resetValues()

              setUserInfo({name: res.data.name, userName: res.data.userName, email: res.data.email, profilePic: res.data.picture})

              // res.data &&  navigate('/feed', {replace : true})
          })
          .catch((error) => {
              console.log( error.response )
          })   
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
        <Box component="form" noValidate onSubmit={updateUser} sx={{ mt: 3 }} style={{textAlign:"center"}}>
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
                style={{textAlign: "center", margin: "1rem"}}
                type="submit"
                variant="contained"
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