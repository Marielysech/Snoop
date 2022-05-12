import { Outlet } from "react-router-dom"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"

const Auth = () => {

    return (
        <>
            {/* <h1>This is the Auth page</h1>
            <div className="authContainer"> */}
            <Outlet />
            {/* <Footer /> */}
            {/* </div> */}
        </>
    )

}

export default Auth