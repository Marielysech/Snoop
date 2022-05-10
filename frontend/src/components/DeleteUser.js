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
        .then(res => console.log('user account has been deleted'))
        setUserInfo({name: "", userName: "", email: ""})
        navigate('/', {replace:true})
  }

return (
    <NavLink onClick={deleteUserAccount} to="/">Delete</NavLink>
)
}

export default DeleteUser
