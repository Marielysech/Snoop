// FUNCTIONNALITY IMPORT
import React, {useState, useContext} from 'react'
import {NavLink as RouterLink, useNavigate} from 'react-router-dom';
import { useAuthContext } from '../contexts/AuthContext';
// MUI IMPORT
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LoginIcon from '@mui/icons-material/Login';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Logout from './Logout';
import Copyright from './Copyright';


const theme = createTheme({

    //CREATE MY OWN THEME HERE 
    // palette: {
    //     primary: {
    //       main: "#00F"
    //     }
    //   },
    //   typography: {
    //     body1: {
    //       fontFamily: "Comic Sans"
    //     }
    //   },
    //   custom: {
    //     myOwnComponent: {
    //       margin: "10px 10px",
    //       backgroundColor: "lightgreen"
    //     }
});

function Login() {
    // to use my own theme
    // const theme = useTheme();

    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

    const navigate = useNavigate();
    const [emailValue, setemailValue] = useState("");
    const [passwordValue, setpasswordValue] = useState("");

    const resetValues = () => {
        setemailValue("")
        setpasswordValue("")
    }   

    const loginUser = (event) => {

    event.preventDefault();

    const requestOptions = {
        method: 'POST',
        credentials: "include",
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email: emailValue, password: passwordValue })
      };

      fetch('/auth/login', requestOptions)
      .then(res =>res.json())
      .then(data => {
        console.log(data)
        setUserInfo({name: data.name, userName: data.userName, email: data.email, profilePic: data.picture, id: data.id})
        resetValues()
        data.name &&  navigate('/feed', {replace : true})
    })
    .catch(error => console.log(error))
     
}

  return (
    // <ThemeProvider theme={theme}>
    // <Container component="main" maxWidth="xs">

      <Grid container component="div" sx={{ height: '100vh' }}>
        <CssBaseline />
        {/* picture container */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=928&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        {/* Form container with multiple breakpoint for responsive design */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <img src='/SnoopLogo.png' style={{maxWidth:"100%", width:"40%", marginBottom:"2rem"}} />
            <Logout />
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                value={emailValue} 
                onChange={(e) => setemailValue(e.target.value)}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={passwordValue} 
                onChange={(e) => setpasswordValue(e.target.value)}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                onClick={loginUser}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item>
                <Link component={RouterLink} to="/auth/register">
                    Don't have an account? Sign Up
                </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
      // </Container>
  );
}

export default Login