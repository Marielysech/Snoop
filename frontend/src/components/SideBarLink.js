import Link from '@mui/material/Link';
import {NavLink as RouterLink} from 'react-router-dom';
import ListItem from '@mui/material/ListItem';
import { ListItemButton } from '@mui/material';
import { ListItemIcon } from '@mui/material';
import { ListItemText } from '@mui/material';

export default function SideBarLink ({text, route, Icon}) {
    return(
       
        // <Link component={RouterLink} to={route} className="sideBarLink">
        //     <Icon className="icon"/>
        //     <h2>{text}</h2>


            <ListItem key={text} disablePadding>
              <ListItemButton component={RouterLink} to={route}>
                <ListItemIcon>
                  <Icon />  
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>


        // </Link>
       
    )
}