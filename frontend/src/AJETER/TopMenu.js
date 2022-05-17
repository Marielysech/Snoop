import * as React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';
import SideBarLink from '../components/SideBarLink';
import NewSearch from '../components/NewSearch';

// MUI COMPONENT
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import PetsIcon from '@mui/icons-material/Pets';

const drawerWidth = 240;

function TopMenu({handler}) {

    // const [file, setFile] = useState(null);
    // const [fileDataURL, setFileDataURL] = useState(null);

    const {userInfo} = useAuthContext()

    const {window, mobileOpen, setMobileOpen, handleDrawerToggle, drawerWidth, drawer, container} = handler

  return (
      <AppBar 
        // onLoad={LoadPicture}
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar style={{display:"flex", justifyContent:"space-between"}}>
            {/* Icon for hamburger menu in mobile version */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography variant="h6" noWrap component="div">
            Snoop.cool
          </Typography>

          <NewSearch />

            {/* PLACEHOLDER FOR USERPICTURE AND DRAWER TO GO TO EITH PROFILE OR SETTINGS */}

          <Avatar alt={userInfo.userName} src={`/uploads/${userInfo.profilePic}`}/>
          <SideBarLink text="Profile" Icon={PetsIcon} route={`/users/${userInfo.userName}`} />
         

        </Toolbar>
      </AppBar>

  );
}


export default TopMenu;