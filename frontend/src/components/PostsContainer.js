import PostTile from "./PostTile"
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import useFetchRequest from '../helper/fetch'
import { Grid } from "@mui/material"

const PostContainer = ({fetchUrl, children}) => {

    const { error, isLoaded, postsList } = useFetchRequest(fetchUrl)
    
    if (error !== null) {
        return <div>Error: {error.message}</div>;
      }

    if (postsList.length < 1) {
        return (
            <div> 
                <p>No post yet</p> 
                <NavLink to="/explore">Explore</NavLink>
            </div>

        )
    }

    // if (!isLoaded) {
    // return <div>Loading...</div>;
    // }

    return (
        <Grid  className="allFollowedPosts">
       
            {children}
            {postsList.map((item, index) => <div key={index}><PostTile item={item}/></div> )}
        </Grid>
  
        
    )
}

export default PostContainer