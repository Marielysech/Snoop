import { Grid, IconButton, Typography } from "@mui/material"
import { useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import Button from "./Button"
import { useAuthContext } from '../contexts/AuthContext';

//MUI IMPORT
import { Avatar } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';


const PostTileProfile = ({item, userData}) => {

    const {userInfo} = useAuthContext()

    const [isLiked, setisLiked] = useState(false)

    function deletePost (event) {
        event.preventDefault()
        
        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
        };

    fetch(`/posts/delete/${item._id}`, requestOptions)
        .then(res =>res.json())
        .then(data => console.log(data.message))
        .catch(error => console.log(error))
    }

    function likePost (event) {
        event.preventDefault()

        const requestOptions = {
            method: 'POST',
            credentials: "include",
            headers: { 'Content-Type': 'application/json'},
        };

    fetch(`/users/favorites/${userData._id}`, requestOptions)
        .then(res =>res.json())
        .then(data =>{
            console.log(data.message)
            data.message === "post liked" ? setisLiked(true) : setisLiked(false)
            // TODO : update post when liked AND DELETE
            // fetch("/posts/")
        })
        .catch(error => console.log(error))
    }

    return (
        <div> 
            
                <Grid container className="PostTile" align="center" md={7} xs={10} > 
                    
                    {/* TOP PART OF THE POST */}

                    <Grid item  style={{display: "flex", flexDirection:"row", alignItems:"center", width:"100%", justifyContent: "space-between"}} >

                        <div style={{alignItems: "center", padding:"0 0.3rem"}}>

                            <Avatar alt={userData.userName} src={`/uploads/${userData.picture}`} />

                            <h5 style={{padding:"0 0.5rem"}}>@{userData.userName}</h5>

                        </div>

                        {userInfo.userName === userData.userName &&
                        <IconButton onClick={deletePost} style={{margin:"0 0.5rem"}}>
                            <DeleteOutlineIcon />
                        </IconButton >}

                    </Grid>

                    {/* POST IMAGE */}

                    <Grid item style={{maxHeight:" 300px"}} >

                        <img style={{ objectFit: "cover", maxHeight:"100%", maxWidth:"100%"}} className="publishedImg" src={`/uploads/${item.content.image}`} />

                    </Grid>


                    {/* LIKE BUTTON AND DATE */}

                    <Grid item style={{display: "flex", flexDirection: "row", padding:"0 0.5rem", alignItems: "center"}}>
                        
                            {isLiked ? <IconButton onClick={likePost}>< FavoriteIcon color="red" /> </IconButton >: <IconButton onClick={likePost}> <FavoriteBorderIcon color="red" /> </IconButton >}
                            
                            <Typography color="red">{item.like.length}</Typography>
                            <p style={{padding:"0 0.5rem"}}><strong>{item.date}</strong></p>
                    </Grid>


                    {/* POST DESCRIPTION */}

                    <Grid item style={{display: "flex", flexDirection: "column", padding:"0 0.5rem"}}>
                
                        <p><em>{userData.userName}</em>: {item.content.text}</p>
                    </Grid>
                    </Grid>
        </div>
    )
}

export default PostTileProfile