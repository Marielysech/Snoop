import PostTile from "./PostTile"
import React, {useState, useEffect} from 'react'
import {NavLink} from 'react-router-dom'
import useFetchRequest from '../helper/fetch'

const PostContainer = ({fetchUrl}) => {

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
        <div className="allFollowedPosts">
            {postsList.map((item, index) => <PostTile item={item} index={index}/> )}
        </div>
  
        
    )
}

export default PostContainer