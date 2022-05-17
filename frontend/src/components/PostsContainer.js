import React, {useState, useEffect} from 'react'
import {NavLink, useParams} from 'react-router-dom'
import useFetchRequest from '../helper/fetch'
import { useAuthContext } from "../contexts/AuthContext";

//MUI COMPONENT
import { Grid } from "@mui/material"
import NoPostsFallback from "./NoPostsFallback"
import PostsToDisplay from "./PostsToDisplay"
import { Avatar } from "@mui/material";
import { IconButton } from "@mui/material";
import LoadingSpinner from './Loader'


const PostContainer = ({fetchUrl, filter = false, followed = false}) => {

    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

    const { error, isLoaded, postsList } = useFetchRequest(fetchUrl)
    const [filteredPost, setfilteredPost] = useState([])
    const [isfollowed, setIsFollowed] = useState("Follow")

    let { userName } = useParams()

    if (error !== null) {
        return <div>Error: {error.message}</div>;
      }

    //   console.log(filter)

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
        // console.log("hello its true" + post)
        // setfilteredPost(post)

        let noPostsData = {
            text: "You have no post",
            gif : "https://media3.giphy.com/media/3ohs4ruO9hBMDRbOne/giphy.gif?cid=ecf05e47qb7vi2shogo9mxpinvb8ivgw2d5iu209vzoe0sn7&rid=giphy.gif&ct=s"
        }

        // const followerArr = postsList.userAction.followedBy || []
        // const followingArr = postsList.userAction.followedUsers || []

       
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
                        <button className={isfollowed}>{isfollowed}</button>
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
        ) : ( <div style={{marginTop: "2rem"}}>
        <LoadingSpinner/> 
        {post.length < 1 && <NoPostsFallback info={noPostsData} /> }
        </div>)

    }

    if ( followed ) {
        // const post = postsList.filter(item => item.author.userName === userName)
        const post = postsList.filter(item => item.author.userAction.followedBy.includes(userInfo.id))

        // console.log("hello its true" + postsList[0].author.userAction.followedBy[0] + console.log(userInfo.id))

       
        return post.length > 0 ? (
            
            <Grid   maxWidth="sm" className="allFollowedPosts" style={{margin: "4rem 0 0 0"}} 
                    container alignItems="center" 
                    spacing={2}
                    md={12}
            >
                {post.length > 0 ?
                <PostsToDisplay postList={post} /> :
                <NoPostsFallback info={noFollowing}/> }
                
            </Grid >
            
        ) : (<div style={{marginTop: "2rem"}}>
        <LoadingSpinner /><NoPostsFallback info={noFollowing}/> </div> )

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
  
        
    ) : ( 
        <LoadingSpinner/> 
       )
}

export default PostContainer