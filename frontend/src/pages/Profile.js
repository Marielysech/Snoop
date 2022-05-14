import { useState } from "react";
import {NavLink, useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import PostContainer from "../components/PostsContainer";
// MUI IMPORT
import Box from '@mui/material/Box';
import TestDrawer from '../AJETER/testDrawer';
import TopMenu from "../AJETER/TopMenu";
const drawerWidth = 240;

const UserProfile = () => {
    const {userName} = useParams();
    const [isfollowed, setIsFollowed] = useState("Follow")

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
            <h1>THIS iS USER PROFILE</h1>
             <PostContainer fetchUrl={`/users/${userName}`}>
            <h1>This is the profile</h1>
            <div className="introUser">    
                <img className="profilePic" src="https://media-exp1.licdn.com/dms/image/C5603AQEeNp-zoW3yCA/profile-displayphoto-shrink_800_800/0/1648060969196?e=1657756800&v=beta&t=BtbM2gqat69TLd14Qwp6bBPFBkFW-2IvcIp505KoZNw"/> 
                <div>
                    <h5>@userName</h5> 
                    <button className={isfollowed} onClick={followUser}>{isfollowed}</button>
                </div>
                <NavLink to="/auth/update"><i className="fa-solid fa-gear fa-xl"></i></NavLink>
            </div>
            </PostContainer>
          </Box>
    
    )

}

export default UserProfile