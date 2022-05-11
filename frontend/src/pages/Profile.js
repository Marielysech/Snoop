import {useParams } from "react-router-dom"
import NavBar from "../components/NavBar"
import PostContainer from "../components/PostsContainer";
import SearchBar from "../components/Searchbar"

const UserProfile = () => {
    const params = useParams();
    let arr = []
    const userPost = arr.filter(item => item.userName === params.userName) 


return (    
    <div>
        <NavBar />
        <SearchBar />
        <h1>This is the Profile page</h1>
        <PostContainer fetchUrl={`/users/${params}`}/>
        
    </div>
    )

}

export default UserProfile