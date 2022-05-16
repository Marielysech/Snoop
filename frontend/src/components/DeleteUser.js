import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const DeleteUser = () => {

    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

    const navigate = useNavigate();

    const deleteUserAccount = (event) => {

        event.preventDefault();
            
        const requestOptions = {
            method: 'GET',
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
        };

        fetch('/auth/delete', requestOptions)
        .then(res => res.json())
        .then(data => console.log(data) )
        setUserInfo({name: "", userName: "", email: ""})
        navigate('/', {replace:true})
  }

return (
    <Button variant="outlined" color="error">
    <NavLink style={{textDecoration:"none", color:"red"}} onClick={deleteUserAccount} to="/">Delete Account</NavLink>
    </Button>
)
}

export default DeleteUser
