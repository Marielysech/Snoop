import { useState } from "react";
import {NavLink, useParams } from "react-router-dom"
import PostContainer from "../components/PostsContainer";
import useFetchRequest from '../helper/fetch'
import PostTileProfile from "../components/PostTileProfile";

// MUI IMPORT
import Box from '@mui/material/Box';
import { Avatar, Grid } from "@mui/material";
import { IconButton } from "@mui/material";

const UserProfile = () => {
    const [isfollowed, setIsFollowed] = useState("Follow")
    let { userName } = useParams()

    const { error, isLoaded, postsList } = useFetchRequest(`/users/${userName}`)

    console.log("HERE LOOOKKKKK" + postsList.posts)

    // const followerArr = postsList.userAction.followedBy || []
    // const followingArr = postsList.userAction.followedUsers || []
    
    const postToDisplay = postsList.posts

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

return (    
        <Box sx={{ display: 'flex' }}>
            <Grid container style={{marginTop: "5rem"}}>
                <Grid item style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent: "space-around", border: "solid 0.8px black", width:"100%", padding:"1rem"}}>

                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                        <Avatar alt={postsList.userName} src={`/uploads/${postsList.picture}`}/>
                        <h5 style={{margin: "0.4rem"}}>@{postsList.userName}</h5> 
                    </div>
                    {/* <div style={{textAlign:"center"}}>
                        <p style={{textDecoration: "underline", marginBottom:" -0.5rem"}}>Following</p>
                        <p>{followingArr.length}</p>
                    </div>
                    <div style={{textAlign:"center"}}>
                        <p style={{textDecoration: "underline", marginBottom:" -0.5rem"}}>Followed</p>
                        <p>{followerArr.length}</p>
                    </div> */}
                    <IconButton onClick={followUser}>
                    <button className={isfollowed} onClick={followUser}>{isfollowed}</button>

                    </IconButton>
                    
           
                </Grid>
                <Grid item>
                    {
                   
                        postsList.post.map((item, index) => 
                        <Grid item textAlign="center" style={{height: "10%"}}  key={index}> 
                            <PostTileProfile item={item} userData={postsList}/> 
                        </Grid> )}
                        
                    {/* <PostContainer fetchUrl={`/users/${userName}`} /> */}
                </Grid>
            </Grid>
          </Box>
    
    )

}

export default UserProfile