import { Grid } from "@mui/material"
import PostTile from "./PostTile"

export default function PostsToDisplay ({postList}) {
    return (
        <Grid container>
    
             {postList.map((item, index) => <div  style={{ marginBottom: "1rem", textAlign:"center" }}  key={index}><PostTile item={item}/></div> )}
        </Grid>
)}