import {NavLink, useNavigate} from 'react-router-dom'
import DeleteUser from './DeleteUser';
import Logout from './Logout';

const NavBar = () => {

   

  return (
      <div className="navBar">
         <h1>This is the NavBar</h1>
          <NavLink  to="/auth/login">Login</NavLink>
          <NavLink  to="/auth/register">Register</NavLink>
          <Logout />  
          <DeleteUser />
          <NavLink  to="/auth/update">update</NavLink>
          <NavLink  to="/posts/new">newPost</NavLink>



         

      </div>
  )  
}



export default NavBar