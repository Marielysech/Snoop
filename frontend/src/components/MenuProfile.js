import React from 'react';
import { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { useAuthContext } from '../contexts/AuthContext';
import PetsIcon from '@mui/icons-material/Pets';
import { Avatar } from '@mui/material';
import { IconButton } from '@mui/material';
import SideBarLink from './SideBarLink';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';

export default function MenuProfile() {

 const {userInfo} = useAuthContext()

 const [anchorEl, setAnchorEl] = useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
      <div>
          {userInfo.userName && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
          <Avatar alt={userInfo.userName} src={`/uploads/${userInfo.profilePic}`}/>
          </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                    

                <MenuItem onClick={handleClose}><SideBarLink text="Profile" Icon={PetsIcon} route={`/users/${userInfo.userName}`} /></MenuItem>
                <MenuItem onClick={handleClose}><SideBarLink text="Settings" Icon={HdrWeakIcon} route="/update" />
</MenuItem>
              </Menu>
            </div>
          )}
       </div>
  );
}
