
const PostTile = ({item, index}) => {


    return (
        <div className="PostTile" key={index}> 
            <div>
                 <img className="profilePic" src="https://media-exp1.licdn.com/dms/image/C5603AQEeNp-zoW3yCA/profile-displayphoto-shrink_800_800/0/1648060969196?e=1657756800&v=beta&t=BtbM2gqat69TLd14Qwp6bBPFBkFW-2IvcIp505KoZNw"/> 
                 <h5>@userName</h5> 
            </div>
            <div >
                <img className="publishedImg" src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" />
                
                <div className="likeC">
                    <i className="fa-solid fa-heart"></i>
                    <p>200</p>
                </div>
            </div>
            <div>
                <p>This is the description |</p>
                <p>| 10/05/2022</p>
            </div>
            


        </div>
    )
}

export default PostTile