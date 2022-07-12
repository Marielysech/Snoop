import React, {useState} from 'react'
import {useNavigate, } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import axios from 'axios';
import { useAuthContext } from '../contexts/AuthContext';


// MUI IMPORT
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { Grid } from '@mui/material';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const drawerWidth = 240;

const NewPost = () => {

  const {userInfo} = useAuthContext()

    const navigate = useNavigate();
    const [image, setImage] = useState("");
    const [descrValue, setdescrValue] = useState("");

    const resetValues = () => {
      setdescrValue("");
      setImage("");
  }

    const createPost = (event) => {
      event.preventDefault()
      if( !image || !descrValue) {return( alert("Please fill all details"))}

      const formData = new FormData(event.target)
        formData.append('description', descrValue)
        formData.append('image', image)

        const requestOptions = {
          method: 'POST',
          url: "/posts/new",
          headers: { 'Content-Type': 'multipart/form-data' },
          data: formData
        };

        axios(requestOptions)
                .then((res) => {
                    console.log("ok", res.data)
                    resetValues()
                    res.data &&  navigate(`/users/${userInfo.userName}`, {replace : true})
                    
                })
                .catch((error) => {
                    console.log( error.response )
                })
    }

    return (
     
        <Box component="form" noValidate onSubmit={createPost} sx={{ mt: 3 }}style={{margin: "5rem 0 0 0"}}> 
        <h2>Create a new post here
        </h2>
          
          <Grid container spacing={2}>
         
            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                placeholder="Enter your post description here"
                autoFocus
                value={descrValue} 
                onChange={(e) => setdescrValue(e.target.value)}
              />
            </Grid>
           
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create new post
          </Button>
          
        </Box>

      )
}

export default NewPost