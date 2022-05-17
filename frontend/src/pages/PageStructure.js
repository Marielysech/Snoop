import { leftDrawer } from '../components/LeftMenu';
import * as React from 'react';
import NewSearch from '../components/NewSearch';
import { useAuthContext } from '../contexts/AuthContext';
import { useState } from 'react';
import SideBarLink from '../components/SideBarLink';


// MUI COMPONENT
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Dialog } from '@mui/material';
import { Outlet } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PetsIcon from '@mui/icons-material/Pets';
import MenuProfile from '../components/MenuProfile';


const drawerWidth = 240;

function PageStructure(props) {
    
    const {userInfo} = useAuthContext()
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
    {/* TOP MENUBAR */}
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
        <div>
          <Typography variant="h6" noWrap component="div" sx={{ display: { xs: 'none', sm: 'none', md: 'block' } }}>
            Snoop.cool
          </Typography>
          </div>
          <div>
          <NewSearch />
          </div>
          <div>
          <MenuProfile />
          </div>
        </Toolbar>
      </AppBar>

      {/* DRAWER CONDITIONAL RENDERING */}
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {leftDrawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {leftDrawer}
        </Drawer>
      </Box>

      {/* HERE START MAIN */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
       <Outlet />
       
      </Box>
    </Box>
  );
}


export default PageStructure;
