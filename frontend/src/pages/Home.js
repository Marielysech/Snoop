import { Outlet } from "react-router-dom"
import NavBar from "../components/NavBar"
import SearchBar from "../components/Searchbar"

const Home = () => {


return (    
    <div>
        <NavBar />
        <SearchBar />
        <h1>This is the home page</h1>
        <Outlet />
    </div>
    )

}

export default Home