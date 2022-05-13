//FINAL LEFT SIDE MENU COMPONENT - TO RENAME AT THE END
import React from "react";
import { useState } from "react";

// components importation
import SideBarLink from "./SideBarLink";
import Logout from "./Logout";

//MUI importation 
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NumbersIcon from '@mui/icons-material/Numbers';
import Toolbar from '@mui/material/Toolbar';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Divider } from "@mui/material";
import { Box } from "@mui/material";



const drawerWidth = 240;

export default function TestDrawer (props) {
    const { window } = props;

  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  // to render it differently on mobile of desktop
  const drawer = (
    <div>
      <Toolbar />
      <Divider />
      <List>
            <ListItem>
                 <img src="https://cdn-icons-png.flaticon.com/512/1291/1291961.png" alt="Bone" className="logo"/>           
            </ListItem>
            <SideBarLink text="Home" Icon={HomeRoundedIcon} route="/feed" />
            <SideBarLink text="Explore" Icon={NumbersIcon} route="/explore"/>
            <SideBarLink text="Home" Icon={HomeRoundedIcon} route="/feed" />
            <ListItem>
             <Logout />
            </ListItem>
        </List>
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

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