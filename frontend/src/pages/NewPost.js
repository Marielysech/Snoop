import React, {useState} from 'react'
import {useNavigate, } from 'react-router-dom';
import NavBar from '../components/NavBar'
import { Outlet } from 'react-router-dom';

// MUI IMPORT
import Box from '@mui/material/Box';
import TestDrawer from '../components/testDrawer';
import TopMenu from '../components/TopMenu';


const drawerWidth = 240;

const NewPost = () => {
    // const navigate = useNavigate();

    const [descrValue, setdescrValue] = useState();
    // const [postData, setPostData] = useState({author: "", authorPic: "", img: "", description: "", date:"", likeCount: 0})


    const createPost = (event) => {
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ description: descrValue})
          };
    
        fetch('/posts/new', requestOptions)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                // setPostData({author: data.author, authorPic: data.authorPic, img: data.img, description: data.description, date:data.date, likeCount: data.likeCount})
            })
            setdescrValue("")
            .catch(error => console.log(error))
          
            event.preventDefault();
  

    }

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
              <h1>New post</h1>
            
            <div>
                <label for="description">Description</label>
                <input type="description" placeholder="Enter your description here" value={descrValue} onChange={(e) => setdescrValue(e.target.value)}></input>
            </div>

        <button type="submit" onClick={createPost}>create post</button>
          </Box>
        </Box>
      )
}

export default NewPost