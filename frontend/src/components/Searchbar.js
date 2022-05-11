import Button from "./Button"
import React, {useState, useEffect} from 'react'
import useFetchRequest from "../helper/fetch"
import { NavLink } from "react-router-dom"

function SearchBar() {

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
            

        </form>      
       
    </>
   
    )
}

export default SearchBar