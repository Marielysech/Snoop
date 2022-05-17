import { Grid } from "@mui/material"
import PostTile from "./PostTile"

export default function PostsToDisplay ({postList}) {
    return (
        <div>
    
             {postList.map((item, index) => <div  textAlign="center" style={{ marginBottom: "1rem"}}  key={index}><PostTile item={item}/></div> )}
        </div>
)}