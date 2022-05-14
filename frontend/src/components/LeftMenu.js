import SideBarLink from './SideBarLink';
import Logout from './Logout';

// MUI IMPORT
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NumbersIcon from '@mui/icons-material/Numbers';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider } from "@mui/material";
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import AddBoxIcon from '@mui/icons-material/AddBox';


export const leftDrawer = (

    <div>
        <Toolbar />
        <Divider />
        <List>
              <ListItem>
                   <img src="https://cdn-icons-png.flaticon.com/512/1291/1291961.png" alt="Bone" className="logo"/>           
              </ListItem>
              <SideBarLink text="Home" Icon={HomeRoundedIcon} route="/feed" />
              <SideBarLink text="Explore" Icon={NumbersIcon} route="/explore"/>
              <SideBarLink text="Settings" Icon={HdrWeakIcon} route="/auth/update" />
              <SideBarLink text="New post" Icon={AddBoxIcon} route="/posts/new" />
  
              <ListItem>
               <Logout />
              </ListItem>
          </List>
        </div>
  );