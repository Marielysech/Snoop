import { Outlet } from "react-router-dom"
import Footer from "../components/Fotter"
import NavBar from "../components/NavBar"
import SearchBar from "../components/Searchbar"
import LoginTest from "../components/Login"

const Home = () => {


return (    
    <div>
        {/* <NavBar />
        <SearchBar />
        <h1>This is the home page</h1> */}
        <Outlet />
        {/* <Footer /> */}
        {/* <LoginTest /> */}
    </div>
    )

}

export default Home