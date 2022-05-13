import { NavLink as RouterLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";
import Link from '@mui/material/Link';
import LogoutIcon from '@mui/icons-material/Logout';
import Button from '@mui/material/Button';



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
   
    <Button variant="contained" id="logout" onClick={logout} startIcon={<LogoutIcon />}>
    Logout
    </Button>
)
}

export default Logout
