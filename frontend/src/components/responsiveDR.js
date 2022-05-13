import * as React from 'react';
import { Outlet } from 'react-router-dom';

// MUI IMPORT
import Box from '@mui/material/Box';
import TestDrawer from './testDrawer';
import TopMenu from './TopMenu';


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
