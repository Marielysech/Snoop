import { useState } from "react";
import {useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import PostContainer from "../components/PostsContainer";
import SearchBar from "../components/Searchbar"

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
    <div>
        <NavBar />
        <SearchBar />
        <h1>This is the Profile page</h1>
        <PostContainer fetchUrl={`/users/${userName}`}>
            <h1>This is the profile</h1>
            <button className={isfollowed} onClick={followUser}>{isfollowed}</button>
        </PostContainer>
        
    </div>
    )

}

export default UserProfile