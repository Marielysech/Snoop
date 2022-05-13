import Button from "../components/Button"
import React, {useState, useEffect} from 'react'
import useFetchRequest from "../helper/fetch"
import { NavLink } from "react-router-dom"
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

// import Search from "@mui/icons-material/Search"


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
    //TODO Loader for user list   
    const { error, isLoaded, postsList: userList } = useFetchRequest("/users/search")
    //To display or not the users
    const [isSearched, setIsSearched] = useState(false) 
    const [refinedSearch, setRefinedSearch] = useState([])   


    const searchUser = (e) => {


        searchValue.length < 1 ? setIsSearched(false) : setIsSearched(true)
        
        const usersMatch = userList.filter(item => item.userName.includes(e.target.value))
        usersMatch.length > 0 && setRefinedSearch(usersMatch)
        
    }

return (
    <>  
         <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
{/* 
        <form className="searchBar">
             <input 
                placeholder="Search users" 
                value={searchValue}               
                onChange={(e) => {
                    setSearchValue(e.target.value)
                    searchUser(e)
                }}
            ></input>
            <p>{searchValue}</p>

        {isSearched ? 
        <div className="userList">
            {refinedSearch.map((item, index) => <div key={index}>
            <NavLink to={`/users/${item.userName}`}>
                <h1>{item.userName}</h1>
            </NavLink>
            </div>)}
        </div> : null}
            

        </form>       */}
       
    </>
   
    )
}

export default NewSearch