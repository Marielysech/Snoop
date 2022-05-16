import React, {useState, useEffect} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import useFetchRequest from '../helper/fetch'
import { Grid } from "@mui/material"
import NoPostsFallback from "./NoPostsFallback"
import PostsToDisplay from "./PostsToDisplay"
import Box from '@mui/material/Box';
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import LoadingSpinner from './Loader'


const PostContainer = ({fetchUrl, filter = false}) => {

    const { error, isLoaded, postsList } = useFetchRequest(fetchUrl)
    const [filteredPost, setfilteredPost] = useState([])
    const [isfollowed, setIsFollowed] = useState("Follow")

    let { userName } = useParams()

    if (error !== null) {
        return <div>Error: {error.message}</div>;
      }

      console.log(filter)

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

    const noFollowing = {
        text: "You don't follow any user yet ! ",
        gif : "https://media.giphy.com/media/3o7abAHdYvZdBNnGZq/giphy.gif"
    }

    
    if ( filter ) {
        const post = postsList.filter(item => item.author.userName === userName)
        console.log("hello its true" + post)
        // setfilteredPost(post)

        let noPostsData = {
            text: "You have no post",
            gif : "https://media3.giphy.com/media/3ohs4ruO9hBMDRbOne/giphy.gif?cid=ecf05e47qb7vi2shogo9mxpinvb8ivgw2d5iu209vzoe0sn7&rid=giphy.gif&ct=s"
        }

       
        return post.length > 0 ? (
            <Grid container marginTop="5rem">
                <Grid item style={{display:"flex", flexDirection:"row", alignItems:"center", justifyContent: "space-around", border: "solid 0.8px black", width:"100%", padding:"1rem"}}>

                    
                    <div style={{display:"flex", flexDirection:"row", alignItems:"center"}}>
                       
                        <Avatar alt={post[0].author.userName} src={`/uploads/${post[0].author.picture}`} style={{border: "0.4px solid grey"}}/>

                        <h5 style={{margin: "0.4rem"}}>@{post[0].author.userName}</h5> 
                        
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

                <Grid   maxWidth="sm" className="allFollowedPosts" style={{margin: "4rem 0 0 0"}} 
                        container alignItems="center" 
                        spacing={2}
                        md={12}
                >
                    {post.length > 0 ?
                    <PostsToDisplay postList={post} /> :
                    <NoPostsFallback info={noPostsData} /> }
                    
                </Grid >
            </Grid>
        ) : (<LoadingSpinner/>)

    }

    return postsList.length > 0 ? (
        <Grid  maxWidth="sm" className="allFollowedPosts" style={{margin: "4rem 0 0 0"}} 
        container alignItems="center" 
        spacing={2}
        md={12}
        >
                {postsList.length > 0 ?
                <PostsToDisplay postList={postsList} /> :
                <NoPostsFallback info={noFollowing}/> }
                
        </Grid >
  
        
    ) : ((<LoadingSpinner/>))
}

export default PostContainer