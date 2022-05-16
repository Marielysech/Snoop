import { Grid } from "@mui/material"
import PostTile from "./PostTile"

export default function PostsToDisplay ({postList}) {
    return (
        <div>
        
            <h1 style={{textAlign: "center"}}>Discover all posts</h1>
             {postList.map((item, index) => <div  textAlign="center" style={{ marginBottom: "1rem", textAlign:"center"}}  key={index}><PostTile item={item}/></div> )}
        </div>
)}