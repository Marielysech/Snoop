import PostTile from "./PostTile"
import React, {useState, useEffect, useRef} from 'react'
import {BrowserRouter as Router, Routes, Route, NavLink} from 'react-router-dom'

const PostContainer = () => {

    const defaultUser = {name:"Stranger", email: "stranger@gmail.com"}

    const [postsFollowedList, setPostsFollowedList] = useState([])
    const [initialML, setInitialML] = useState([])
    const [userInfo, setUserInfo] = useState(defaultUser)
    // console.log(userInfo.name)
   
    function getAllFollowedPosts() {
      fetch('/')
      .then(response => response.json())
      .then(data => {
          console.log(data)
          data.allPost && setPostsFollowedList(data.allPosts)
      })
      .catch(err => console.log(err))
    
  }
  
  useEffect( () => {getAllFollowedPosts()}, [])
    return (
        <div className="allFollowedPosts">
            {postsFollowedList.length > 0 ? 
            postsFollowedList.map(item => <PostTile item={item}/> ) : 
            <div> 
                <p>No post yet</p>
                <NavLink to="/explore">Explore</NavLink>
            </div>
            }
        </div>
  
        
    )
}

export default PostContainer