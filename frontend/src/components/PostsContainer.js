import PostTile from "./PostTile"
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import useFetchRequest from '../helper/fetch'
import { Grid } from "@mui/material"

const PostContainer = ({fetchUrl}) => {

    const { error, isLoaded, postsList, fetchPosts } = useFetchRequest(fetchUrl)
    
    if (error !== null) {
        return <div>Error: {error.message}</div>;
      }

    // if (postsList.length < 1) {
    //     return (
    //         <div> 
    //             <p>No post yet</p> 
    //             <NavLink to="/explore">Explore</NavLink>
    //         </div>

    //     )
    // }

    // if (!isLoaded) {
    // return <div>Loading...</div>;
    // }

    return (
        <Grid  maxWidth="sm" className="allFollowedPosts" style={{margin: "4rem 0 0 0"}} 
        container alignItems="center" 
        spacing={2}
        md={12}
        >
            {postsList.length > 0 ? 
            postsList.map((item, index) => <Grid item textAlign="center" style={{heigth: "10%"}}  key={index}><PostTile item={item}/></Grid> ) 
            : 
            <Grid container alignItems="center">
            <Grid item  xs={11} md={12} >
              
            <p style={{textAlign: "center"}}>You don't follow any user yet ! Go to the <NavLink to="/explore">explore</NavLink> section</p>
            </Grid>
            <Grid item  xs={11} md={12} textAlign="center">
            <img style={{maxWidth:"100%", textAlign: "center"}}  src="https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif"/>
            </Grid>
            </Grid>}
        </Grid>
  
        
    )
}

export default PostContainer