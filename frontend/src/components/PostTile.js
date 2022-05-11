import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Button from "./Button"

const PostTile = ({item}) => {
    const navigate = useNavigate()
    const [isLiked, setisLiked] = useState("notLiked")
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
            data.message === "post liked" ? setisLiked("liked") : setisLiked("notLiked")
        })
        .catch(error => console.log(error))
    }


    return (
        <div className="PostTile" > 
            <div>
                 <img className="profilePic" src="https://media-exp1.licdn.com/dms/image/C5603AQEeNp-zoW3yCA/profile-displayphoto-shrink_800_800/0/1648060969196?e=1657756800&v=beta&t=BtbM2gqat69TLd14Qwp6bBPFBkFW-2IvcIp505KoZNw"/> 
                 <h5>@userName</h5> 
                 <Button text={<i className="fa-solid fa-trash-can"></i>} onClick={deletePost}/>
            </div>
            <div >
                <img className="publishedImg" src="https://uning.es/wp-content/uploads/2016/08/ef3-placeholder-image.jpg" />
                
                <div className="likeC">
                    <Button className={isLiked}  text={<i className="fa-solid fa-heart"></i>} onClick={likePost}/>
                    
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