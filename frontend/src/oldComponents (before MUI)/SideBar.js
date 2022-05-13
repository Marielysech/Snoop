import SideBarLink from "./SideBarLink";
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import Logout from "./Logout";
import NumbersIcon from '@mui/icons-material/Numbers';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Grid } from "@mui/material";

export default function SideBar () {


    return (
        <Grid container className="sideBar" direction="column" justify="flex-start">
            <Grid item container xs={4}justify="space-between" >
              <img src="https://cdn-icons-png.flaticon.com/512/1291/1291961.png" alt="Bone" className="logo"/>
            </Grid>
            <Grid item container xs={4}justify="space-between" >
              <SideBarLink text="Home" Icon={HomeRoundedIcon} route="/feed" />
            </Grid>
            <Grid item container xs={4} justify="space-between" >
              <SideBarLink text="Explore" Icon={NumbersIcon} route="/explore"/>
            </Grid>
            <Grid item container xs={4} justify="space-between" >
             <SideBarLink text="Favorite" Icon={FavoriteIcon} route="/favorite"/>
            </Grid>
            <Grid item container xs={4} justify="space-between" >
            <Logout />
            </Grid>
            
           
            
            {/* TODO : create display of fav */}
            
        
        </Grid>

    )
}