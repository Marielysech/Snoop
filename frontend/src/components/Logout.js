import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const Logout = () => {

    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

    const navigate = useNavigate();

    const logout = (event) => {

        event.preventDefault();
            
        const requestOptions = {
            method: 'GET',
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
        
        };

        fetch('/auth/logout', requestOptions)
        .then(res => console.log('user disconnected'))
        setUserInfo({name: "", userName: "", email: ""})
        navigate('/', {replace:true})
  }

return (
    <NavLink onClick={logout} to="/">Logout</NavLink>
)
}

export default Logout
