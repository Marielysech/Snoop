// import * as React from 'react';
// import { styled, alpha } from '@mui/material/styles';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import InputBase from '@mui/material/InputBase';
// import Badge from '@mui/material/Badge';
// import MenuItem from '@mui/material/MenuItem';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
// import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import MoreIcon from '@mui/icons-material/MoreVert';
// import PropTypes from 'prop-types';
// import CssBaseline from '@mui/material/CssBaseline';
// import Divider from '@mui/material/Divider';
// import Drawer from '@mui/material/Drawer';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';


// // const Search = styled('div')(({ theme }) => ({
// //   position: 'relative',
// //   borderRadius: theme.shape.borderRadius,
// //   backgroundColor: alpha(theme.palette.common.white, 0.15),
// //   '&:hover': {
// //     backgroundColor: alpha(theme.palette.common.white, 0.25),
// //   },
// //   marginRight: theme.spacing(2),
// //   marginLeft: 0,
// //   width: '100%',
// //   [theme.breakpoints.up('sm')]: {
// //     marginLeft: theme.spacing(3),
// //     width: 'auto',
// //   },
// // }));

// // const SearchIconWrapper = styled('div')(({ theme }) => ({
// //   padding: theme.spacing(0, 2),
// //   height: '100%',
// //   position: 'absolute',
// //   pointerEvents: 'none',
// //   display: 'flex',
// //   alignItems: 'center',
// //   justifyContent: 'center',
// // }));

// // const StyledInputBase = styled(InputBase)(({ theme }) => ({
// //   color: 'inherit',
// //   '& .MuiInputBase-input': {
// //     padding: theme.spacing(1, 1, 1, 0),
// //     // vertical padding + font size from searchIcon
// //     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
// //     transition: theme.transitions.create('width'),
// //     width: '100%',
// //     [theme.breakpoints.up('md')]: {
// //       width: '20ch',
// //     },
// //   },
// // }));
// const drawerWidth = 240;

// export default function TopMenu(props) {
//     const drawerWidth = 240;

//     const { window } = props;
//   const [mobileOpen, setMobileOpen] = React.useState(false);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const drawer = (
//     <div>
//       <Toolbar />
//       <Divider />
//       <List>
//         {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//       <Divider />
//       <List>
//         {['All mail', 'Trash', 'Spam'].map((text, index) => (
//           <ListItem key={text} disablePadding>
//             <ListItemButton>
//               <ListItemIcon>
//                 {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
//               </ListItemIcon>
//               <ListItemText primary={text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>
//     </div>
//   );

// //   const container = window !== undefined ? () => window().document.body : undefined;
// //   const [anchorEl, setAnchorEl] = React.useState(null);
// //   const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

// //   const isMenuOpen = Boolean(anchorEl);
// //   const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

// //   const handleProfileMenuOpen = (event) => {
// //     setAnchorEl(event.currentTarget);
// //   };

// //   const handleMobileMenuClose = () => {
// //     setMobileMoreAnchorEl(null);
// //   };

// //   const handleMenuClose = () => {
// //     setAnchorEl(null);
// //     handleMobileMenuClose();
// //   };

// //   const handleMobileMenuOpen = (event) => {
// //     setMobileMoreAnchorEl(event.currentTarget);
// //   };

// //   const menuId = 'primary-search-account-menu';
// //   const renderMenu = (
// //     <Menu
// //       anchorEl={anchorEl}
// //       anchorOrigin={{
// //         vertical: 'top',
// //         horizontal: 'right',
// //       }}
// //       id={menuId}
// //       keepMounted
// //       transformOrigin={{
// //         vertical: 'top',
// //         horizontal: 'right',
// //       }}
// //       open={isMenuOpen}
// //       onClose={handleMenuClose}
// //     >
// //       <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
// //       <MenuItem onClick={handleMenuClose}>My account</MenuItem>
// //     </Menu>
// //   );

// //   const mobileMenuId = 'primary-search-account-menu-mobile';
// //   const renderMobileMenu = (
// //     <Menu
// //       anchorEl={mobileMoreAnchorEl}
// //       anchorOrigin={{
// //         vertical: 'top',
// //         horizontal: 'right',
// //       }}
// //       id={mobileMenuId}
// //       keepMounted
// //       transformOrigin={{
// //         vertical: 'top',
// //         horizontal: 'right',
// //       }}
// //       open={isMobileMenuOpen}
// //       onClose={handleMobileMenuClose}
// //     >
// //       <MenuItem>
// //         <IconButton size="large" aria-label="show 4 new mails" color="inherit">
// //           <Badge badgeContent={4} color="error">
// //             <MailIcon />
// //           </Badge>
// //         </IconButton>
// //         <p>Messages</p>
// //       </MenuItem>
// //       <MenuItem>
// //         <IconButton
// //           size="large"
// //           aria-label="show 17 new notifications"
// //           color="inherit"
// //         >
// //           <Badge badgeContent={17} color="error">
// //             <NotificationsIcon />
// //           </Badge>
// //         </IconButton>
// //         <p>Notifications</p>
// //       </MenuItem>
// //       <MenuItem onClick={handleProfileMenuOpen}>
// //         <IconButton
// //           size="large"
// //           aria-label="account of current user"
// //           aria-controls="primary-search-account-menu"
// //           aria-haspopup="true"
// //           color="inherit"
// //         >
// //           <AccountCircle />
// //         </IconButton>
// //         <p>Profile</p>
// //       </MenuItem>
// //     </Menu>
// //   );

//   return (
//     <Box
//         component="nav"
//         sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
//         aria-label="mailbox folders"
//       >
//         {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
//         <Drawer
//           container={container}
//           variant="temporary"
//           open={mobileOpen}
//           onClose={handleDrawerToggle}
//           ModalProps={{
//             keepMounted: true, // Better open performance on mobile.
//           }}
//           sx={{
//             display: { xs: 'block', sm: 'none' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//         >
//           {drawer}
//         </Drawer>
//         <Drawer
//           variant="permanent"
//           sx={{
//             display: { xs: 'none', sm: 'block' },
//             '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
//           }}
//           open
//         >
//           {drawer}
//         </Drawer>
//       </Box>
//   );
// }
