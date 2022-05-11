import {useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import PostContainer from "../components/PostsContainer";
import SearchBar from "../components/Searchbar"

const UserProfile = () => {
    const {userName} = useParams();
    let arr = []
    const userPost = arr.filter(item => item.userName === userName.userName) 

    console.log(`/users/${userName}`)


return (    
    <div>
        <NavBar />
        <SearchBar />
        <h1>This is the Profile page</h1>
        <PostContainer fetchUrl={`/users/${userName}`}/>
        
    </div>
    )

}

export default UserProfile