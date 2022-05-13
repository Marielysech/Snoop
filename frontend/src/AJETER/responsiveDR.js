import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SideBarLink from '../components/SideBarLink';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NumbersIcon from '@mui/icons-material/Numbers';
import Logout from '../components/Logout';
import TestDrawer from '../components/testDrawer';
import TopMenu from '../components/TopMenu';
import { Outlet } from 'react-router-dom';


const drawerWidth = 240;

function ResponsiveDrawer(props) {

  return (
    <Box sx={{ display: 'flex' }}>
      <TopMenu />
      <TestDrawer />
      {/* HERE IS THE MAIN - PART THAT INCLUDES THE OUTLET */}
      <Box component="main"
        sx={{ flexGrow: 1, 
              p: 3, 
              width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
         <Outlet />
      </Box>
    </Box>
  );
}


export default ResponsiveDrawer;
