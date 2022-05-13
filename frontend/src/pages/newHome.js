import { Outlet } from "react-router-dom"
import Footer from "../components/Fotter"
// import SideBar from "../components/SideBar";
import { useAuthContext } from '../contexts/AuthContext';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const NewHome = () => {

    const {userInfo, setUserInfo} = useAuthContext() //auth.userInfo and auth.setUserInfo

return (    
        <Grid container component="div"  sx={{ height: '100vh' }}>
            <Grid
                    item
                    xs={false}
                    className="sideBarContainer"
                    sm={2}
                    md={3}
                    sx={{
                        // backgroundColor: (t) =>
                        // t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        // backgroundSize: 'cover',
                        // backgroundPosition: 'center',
                    }}
                    > 
                {/* <SideBar /> */}
            </Grid>
            <Grid item xs={12} sm={8} md={5} elevation={6} square>
            <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
                <Outlet />
                <Footer />
            </Box>
            </Grid>    
                
        </Grid>
    )

}

export default NewHome