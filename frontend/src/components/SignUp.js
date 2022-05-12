// FUNCTIONALITY RELATED IMPORT
import React, {useState} from 'react'
import {NavLink as RouterLink, useNavigate } from 'react-router-dom';
import axios from 'axios'

// MUI DESIGN RELATED IMPORT
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Marie-Lyse Charrière
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// const theme = createTheme();

export default function SignUp() {

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

        const formData = new FormData(event.target)
        formData.append('name', nameValue)
        formData.append('userName', userNameValue)
        formData.append('email', emailValue)
        formData.append('password', passwordValue)
        formData.append('image', image)

        console.log(formData)

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
                    res.data &&  navigate('/auth/login', {replace : true})
                })
                .catch((error) => {
                    console.log( error.response )
                })

               
    }

  return (
    <>
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Create an account
          </Typography>
          <Box component="form" noValidate onSubmit={registerUser} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12}>
                {/* TODO : create here component for image upload */}
                <TextField
                  required
                  fullWidth
                //   label="Name"
                  type={"file"}
                  autoFocus
                  name='image'
                  placeholder='Upload your profile picture here'
                  value={image} 
                  onChange={(e) => setImage(e.target.value)}
                />
                </Grid>
                {/* <Grid item xs={12} sm={6}>
                    <Typography variant='h5'> Upload here your profile picture</Typography>
                </Grid> */}
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Name"
                  autoFocus
                  value={nameValue} 
                  onChange={(e) => setnameValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Username"
                  value={userNameValue} 
                  onChange={(e) => setUserNameValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Email Address"
                  autoComplete="email"
                  value={emailValue} 
                  onChange={(e) => setemailValue(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Password"
                  type="password"
                  value={passwordValue} 
                  onChange={(e) => setpasswordValue(e.target.value)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link component={RouterLink} to="/auth/login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
   
    </>
  );
}