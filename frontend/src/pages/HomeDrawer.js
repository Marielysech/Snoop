import { Outlet } from "react-router-dom"
import Footer from "../components/Fotter"
import { useAuthContext } from '../contexts/AuthContext';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import TestDrawer from "../components/testDrawer";
import { AppBar } from "@mui/material";
import { Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import TopMenu from "../components/TopMenu";
import NewSearch from "../components/NewSearch";
import React from "react";


const drawerWidth = 240;

const HomeDrawer = (props) => {

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
  
    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
    const drawerWidth = 240;
    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

return ( 
    <Box sx={{ display: 'flex' }}>
        {/* Top menu */}
        <TopMenu />
        {/* Left menu */}
         <TestDrawer />
        {/* Page content*/}
        {/* <NewSearch /> */}
         {/* <Box  component="main" sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }} >
        <Toolbar />
        <Outlet />
        </Box> */}
    </Box>

 )

}

export default HomeDrawer