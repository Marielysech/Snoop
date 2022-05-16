<Grid container className="PostTile" align="center" md={7} xs={10} > 
      
            <Grid item  style={{display: "flex", flexDirection:"row", alignItems:"center", width:"100%", justifyContent: "space-between"}} >
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
        <Grid item style={{maxHeight:" 300px"}} >
            <img style={{ objectFit: "cover", maxHeight:"100%", maxWidth:"100%"}} className="publishedImg" src={`/uploads/${item.content.image}`} />
        </Grid>
        {/* LIKE BUTTON AND DATE */}
        <Grid item style={{display: "flex", flexDirection: "row", padding:"0 0.5rem", alignItems: "center"}}>
            
                {isLiked ? <IconButton onClick={likePost}>< FavoriteIcon color="red" /> </IconButton >: <IconButton onClick={likePost}> <FavoriteBorderIcon style={{color:"red"}} /> </IconButton >}
                
                <Typography color="red">{item.like.length}</Typography>
                <p style={{padding:"0 0.5rem"}}><strong>{item.date}</strong></p>
        </Grid>
        {/* POST DESCRIPTION */}
        <Grid item style={{display: "flex", flexDirection: "column", padding:"0 0.5rem"}}>
            
        
        <p><em>{item.author.userName}</em> : {item.content.text}</p>
           
        </Grid>
        </Grid>