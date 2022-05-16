import React, {useState} from 'react'
import {NavLink, useParams } from "react-router-dom"
import useFetchRequest from '../helper/fetch'

// MUI IMPORT
import Box from '@mui/material/Box';
import { Avatar, Grid } from "@mui/material";
import { IconButton } from "@mui/material";
import { Typography } from '@mui/material';
import { LinearProgress } from '@mui/material';
import PostTile from './PostTile';

const ProfileUser = () => {
    const [isfollowed, setIsFollowed] = useState("Follow")
    let { userName } = useParams()

    const fetchUrl = `/users/${userName}`

    const { error, isLoaded, postsList } = useFetchRequest(fetchUrl)
    const {postsList : allUsers } = useFetchRequest("/users/search")

    const userToDisplay = allUsers.filter(item => item.userName === userName)

    console.log("this is usertodisplay" + userToDisplay + "allUser:" + allUsers)
    // console.log(postsList.posts[0])
    // const item = postsList.posts[0]

    function followUser() {

        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
        };

    fetch(`/users/${userName}`, requestOptions)
        .then(res =>res.json())
        .then(data =>{
             console.log(data.message)
             data.message === "followed" ? setIsFollowed("Followed") : setIsFollowed("Follow")
        })
        .catch(error => console.log(error))

    }

    if (isLoaded) {
        return (
            <div>
                <LinearProgress />
                <LinearProgress />
                <LinearProgress />
                <LinearProgress />
            </div>
        )
    }

return (    
        <Box sx={{ display: 'flex' }}>
            <Grid container style={{marginTop: "5rem"}}>
                <Grid item style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent: "space-around", border: "solid 0.8px black", width:"100%", padding:"1rem"}}>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>

                        <Avatar alt={postsList.userName} src={`/uploads/${postsList.picture}`}/>

                        <h5 style={{margin: "0.4rem"}}>@{postsList.userName}</h5> 

                        <p>here: {userToDisplay.userName}</p>
                        
                    </div>

                    <IconButton onClick={followUser}>
                        <button className={isfollowed} onClick={followUser}>{isfollowed}</button>
                    </IconButton>
           
                </Grid>
                <Grid item>
                

                {postsList.map((item, index) => <Grid container marginTop="3rem"><PostTile item={item} />
                    </Grid>)}
                






                </Grid>
            </Grid>
          </Box>
    
    )

}

export default ProfileUser