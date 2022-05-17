import { useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"
import Button from "./Button"
import { useAuthContext } from '../contexts/AuthContext';

//MUI IMPORT
import { Avatar } from "@mui/material"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { Divider, Grid, IconButton, Typography } from "@mui/material"


const PostTile = ({item}) => {

    let { userName } = useParams()

    const {userInfo} = useAuthContext()
    const [profilePosts, setProfilePosts] = useState([])

    const navigate = useNavigate()
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

    fetch(`/users/favorites/${item._id}`, requestOptions)
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
        <div> {item.author &&
        <Grid container className="PostTile" align="center" display="flex" flexDirection="columns" md={5} xs={13} border="0.5px solid grey" > 


            {/* TOP PART OF THE POST */}

                <Grid  item={true}  style={{display: "flex", flexDirection:"row", alignItems:"center", width:"100%", justifyContent: "space-between"}} >
                    <div style={{alignItems: "center", padding:"0 0.3rem"}}>
                        <NavLink to={`/users/${item.author.userName}`}> <Avatar alt={item.author.userName} src={`/uploads/${item.author.picture}`} /> </NavLink>
                        <NavLink to={`/users/${item.author.userName}`}> <h5 style={{padding:"0 0.5rem"}}>@{item.author.userName}</h5> </NavLink>
                    </div>
                    {userInfo.userName === item.author.userName &&
                    <IconButton onClick={deletePost} style={{margin:"0 0.5rem"}}>
                    <DeleteOutlineIcon />
                    </IconButton >}
            </Grid>
            
            {/* POST IMAGE */}

            <Grid item={true} style={{maxHeight:"100%"}} >
                <img style={{ objectFit: "cover", maxHeight:"100%", maxWidth:"100%"}} className="publishedImg" src={`/uploads/${item.content.image}`} />
            </Grid>

            {/* LIKE BUTTON AND DATE */}

            <Grid item={true} style={{display: "flex", flexDirection: "row", padding:"0 0.5rem", alignItems: "center"}}>
                
                    {isLiked ? <IconButton onClick={likePost}>< FavoriteIcon color="red" /> </IconButton >: <IconButton onClick={likePost}> <FavoriteBorderIcon style={{color:"red"}} /> </IconButton >}
                    
                    <Typography color="red">{item.like.length}</Typography>
                    <p style={{padding:"0 0.5rem"}}><em>{item.date}</em></p>
                   
            </Grid>
            

            {/* POST DESCRIPTION */}
            
            <Grid item={true} style={{display: "flex", flexDirection: "column", padding:"0 0.5rem"}}>
            
                <p style={{textAlign: "left"}}><strong>{item.author.userName}</strong> : {item.content.text}</p>
               
            </Grid>
            
            



        </Grid>}
        </div>
    )
}

export default PostTile