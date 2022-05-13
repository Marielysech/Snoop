import * as React from 'react';
import { useAuthContext } from '../contexts/AuthContext';
import { useEffect, useState } from 'react';

// MUI COMPONENT
import AppBar from '@mui/material/AppBar';
import IconButton from '@mui/material/IconButton';
import { Avatar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import NewSearch from './NewSearch';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const drawerWidth = 240;

function TopMenu(props) {

    // const [file, setFile] = useState(null);
    // const [fileDataURL, setFileDataURL] = useState(null);
  
    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

//   const LoadPicture = (e) => {
//     const file = `./uploads/${userInfo.profilePic}`
//     setFile(file);
//   }

//   useEffect(() => {
//     let fileReader, isCancel = false;
//     if (file) {
//       fileReader = new FileReader();
//       fileReader.onload = (e) => {
//         const { result } = e.target;
//         if (result && !isCancel) {
//           setFileDataURL(result)
//         }
//       }
//       fileReader.readAsDataURL(file);
//     }
//     return () => {
//       isCancel = true;
//       if (fileReader && fileReader.readyState === 1) {
//         fileReader.abort();
//       }
//     }

//   }, [file]);


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
         
         

        </Toolbar>
      </AppBar>

  );
}


export default TopMenu;
