import Button from "../components/Button"
import React, {useState, useEffect} from 'react'
import useFetchRequest from "../helper/fetch"
import { NavLink } from "react-router-dom"

// MUI IMPORT
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Drawer } from "@mui/material";
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/ListItem';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import Fade from '@mui/material/Fade';
import LoadingSpinner from './Loader'


// import Search from "@mui/icons-material/Search"

const drawerWidth = 240;

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));
  
function NewSearch() {


    const [searchValue, setSearchValue] = useState("") 

    const { error, isLoaded, postsList: userList } = useFetchRequest("/users/search")

    //To display or not the users
    const [isSearched, setIsSearched] = useState(false) 
    const [refinedSearch, setRefinedSearch] = useState([])
    const [initialSearch, setInitialSearch] = useState(userList)




    function searchUser (e) {
        searchValue.length < 1 ? setIsSearched(false) : setIsSearched(true)
        const usersMatch = userList.filter(item => item.userName(searchValue))
      
        console.log("this should be search results" + usersMatch.userName)
        usersMatch.length > 1 && setRefinedSearch(usersMatch)
        // usersMatch.length <  && setRefinedSearch([])

    }

    //function for popper search result
    const [open, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((previousOpen) => !previousOpen);
    };

    const closePanel = () => {
      setOpen(false);
    };

    const canBeOpen = open && Boolean(anchorEl);
    const id = canBeOpen ? 'transition-popper' : undefined;
    
    const searchResults = (
        <div>
            <div style={{display: "flex", flexDirection:"column"}}>
            {refinedSearch.map((item, index) => 
                <ListItem key={index}>
                    <NavLink to={`/users/${item.userName}`}>
                      <div className="userSearched">
                      <Avatar src={`/uploads/${item.picture}`}/>
                        <p className="searchResults">{item.userName}</p>
                        </div>
                    </NavLink>
                </ListItem> )}
            </div>
        </div>
    )

return  (
    <>  
         <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              onChange={(e) => {
                setSearchValue(e.target.value)
                searchUser(e)
            }}
              onClick={handleClick}
              value={searchValue} 
              placeholder="Search user"
              inputProps={{ 'aria-label': 'search' }}
            /> 
             {refinedSearch.length > 1 ?
              <Popper id={id} open={open} anchorEl={anchorEl} transition className="popper">
              {({ TransitionProps }) => (
              <Fade {...TransitionProps} timeout={350}>
              <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper' }}>
              {searchResults}
              </Box>
              </Fade>
                )}
              </Popper> : null}
      </Search>    
       
    </>
   
    )
}

export default NewSearch