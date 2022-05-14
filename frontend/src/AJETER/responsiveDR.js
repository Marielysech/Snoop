// import * as React from 'react';
// import { useState } from 'react';
// import { Outlet } from 'react-router-dom';
// import SideBarLink from './SideBarLink';
// import { useAuthContext } from '../contexts/AuthContext';
// import Logout from './Logout';
// import { drawer } from './LeftMenu';

// // MUI IMPORT
// import Box from '@mui/material/Box';
// import TestDrawer from './testDrawer';
// import TopMenu from './TopMenu';
// import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
// import NumbersIcon from '@mui/icons-material/Numbers';
// import Toolbar from '@mui/material/Toolbar';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import { Divider } from "@mui/material";
// import PetsIcon from '@mui/icons-material/Pets';
// import HdrWeakIcon from '@mui/icons-material/HdrWeak';
// import AddBoxIcon from '@mui/icons-material/AddBox';


// const drawerWidth = 240;

// function ResponsiveDrawer(props) {

//     const {userInfo} = useAuthContext()

//     const { window } = props;
//     const [mobileOpen, setMobileOpen] = useState(false);
  
//     const handleDrawerToggle = () => {
//       setMobileOpen(!mobileOpen);
//     };

//     const container = window !== undefined ? () => window().document.body : undefined;
//     const reponsiveProps = {window, mobileOpen, setMobileOpen, handleDrawerToggle, container, drawerWidth, drawer}

    

//   return (
//     <Box sx={{ display: 'flex' }}>
//       <TopMenu handler={reponsiveProps}/>
//       <TestDrawer handler={reponsiveProps} />
//       {/* HERE IS THE MAIN - PART THAT INCLUDES THE OUTLET */}
//       <Box component="main"
//         sx={{ flexGrow: 1, 
//               p: 3, 
//               width: { sm: `calc(100% - ${drawerWidth}px)` } }}
//       >
//          <Outlet />
//       </Box>
//     </Box>
//   );
// }


// export default ResponsiveDrawer;
