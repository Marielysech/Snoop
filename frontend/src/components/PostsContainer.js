import PostTile from "./PostTile"
import React, {useState, useEffect} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import useFetchRequest from '../helper/fetch'
import { Grid } from "@mui/material"
import NoPostsFallback from "./NoPostsFallback"
import PostsToDisplay from "./PostsToDisplay"

const PostContainer = ({fetchUrl, filter = false}) => {

    const { error, isLoaded, postsList } = useFetchRequest(fetchUrl)
    const [filteredPost, setfilteredPost] = useState([])
    let { userName } = useParams()

    

    if (error !== null) {
        return <div>Error: {error.message}</div>;
      }

      console.log(filter)

    const noFollowing = {
        text: "You don't follow any user yet ! ",
        gif : "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif"
    }

    
    if ( filter ) {
        const post = postsList.filter(item => item.author.userName === userName)
        console.log("hello its true" + filteredPost)
        // setfilteredPost(post)

        let noPostsData = {
            text: "You have no post",
            gif : "https://media3.giphy.com/media/3ohs4ruO9hBMDRbOne/giphy.gif?cid=ecf05e47qb7vi2shogo9mxpinvb8ivgw2d5iu209vzoe0sn7&rid=giphy.gif&ct=s"
        }

       
        return (
            <Grid   maxWidth="sm" className="allFollowedPosts" style={{margin: "4rem 0 0 0"}} 
                    container alignItems="center" 
                    spacing={2}
                    md={12}
            >
                {post.length > 0 ?
                <PostsToDisplay postList={post} /> :
                <NoPostsFallback info={noPostsData} /> }
                
             </Grid >
        )

    }

    // console.log(filteredPost)


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
                <PostsToDisplay postList={postsList} /> :
                <NoPostsFallback info={noFollowing}/> }
                
        </Grid >
  
        
    )
}

export default PostContainer