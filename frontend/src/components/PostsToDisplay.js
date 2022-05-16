import { Grid } from "@mui/material"
import PostTile from "./PostTile"

export default function PostsToDisplay ({postList}) {
    return (
        <div>
             {postList.map((item, index) => <Grid item textAlign="center" style={{heigth: "10%", marginBottom: "1rem"}}  key={index}><PostTile item={item}/></Grid> )}
        </div>
)}