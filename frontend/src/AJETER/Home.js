import { Outlet } from "react-router-dom"
import Footer from "../components/Fotter"
import NavBar from "../components/NavBar"
// import SearchBar from "../components/Searchbar"
// import SideBar from "../components/SideBar";
import { useAuthContext } from '../contexts/AuthContext';


const Home = () => {

    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

return (    
    <div>
        {/* <SideBar /> */}
        <NavBar />
        {/* <SearchBar /> */}
        <h1>This is the home page of {userInfo.name}</h1>
        <Outlet />
        <Footer />
 
    </div>
    )

}

export default Home