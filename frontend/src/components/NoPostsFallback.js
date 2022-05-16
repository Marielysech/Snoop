import { Grid } from "@mui/material"
import { NavLink } from "react-router-dom"

export default function NoPostsFallback ({info}) {

return (
    <Grid container alignItems="center">

        <Grid item  xs={11} md={12} >
            <p style={{textAlign: "center"}}>
                 {info.text} Go to the <NavLink to="/explore">explore</NavLink> section or create <NavLink to="/new">a new post</NavLink> 
            </p>
        </Grid>

        <Grid item  xs={11} md={12} textAlign="center">
        
            <img 
                style={{maxWidth:"100%", textAlign: "center"}}  src={info.gif}/>
        </Grid>
    </Grid>
)

}