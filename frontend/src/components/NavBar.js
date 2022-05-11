import {NavLink, useNavigate} from 'react-router-dom'
import { useAuthContext } from '../contexts/AuthContext';
import DeleteUser from './DeleteUser';
import Logout from './Logout';

const NavBar = () => {

   const {userInfo} = useAuthContext()

  return (
      <div className="navBar">
         <h1>This is the NavBar</h1>
          <NavLink  to="/auth/login">Login</NavLink>
          <NavLink  to="/auth/register">Register</NavLink>
          {userInfo.name && <>
          <Logout />  
          <DeleteUser />
          <NavLink  to="/auth/update">update</NavLink>
          <NavLink  to="/posts/new">newPost</NavLink>
          <div className='blue'>
          <NavLink  to="/feed">home</NavLink>
          <NavLink  to="/">Profile</NavLink>
          <NavLink  to="/explore">explore</NavLink>
          </div>
          </>}





         

      </div>
  )  
}



export default NavBar