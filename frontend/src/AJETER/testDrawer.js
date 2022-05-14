//FINAL LEFT SIDE MENU COMPONENT - TO RENAME AT THE END
import React from "react";
import { useState } from "react";
import { useAuthContext } from '../contexts/AuthContext';


// components importation
import SideBarLink from "../components/SideBarLink";
import Logout from "../components/Logout";

//MUI importation 
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NumbersIcon from '@mui/icons-material/Numbers';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider } from "@mui/material";
import { Box } from "@mui/material";
import PetsIcon from '@mui/icons-material/Pets';
import HdrWeakIcon from '@mui/icons-material/HdrWeak';
import AddBoxIcon from '@mui/icons-material/AddBox';

const drawerWidth = 240;

export default function TestDrawer (handler) {
    const {userInfo} = useAuthContext()

    const {window, mobileOpen, setMobileOpen, handleDrawerToggle, drawerWidth, drawer, container} = handler

    console.log(userInfo.userName)

  // to render it differently on mobile of desktop


//   const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box
            component="nav"
            sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
         >
                {/* HERE IS THE DRAWER FOR MOBILE */}
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
                    {drawer}
                </Drawer>
                {/* HERE IS THE DRAWER FOR DESKTOP */}
                <Drawer
                variant="permanent"
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                open
                >
                 {drawer}
                </Drawer>
        </Box>

    )
}