import PostContainer from "./PostsContainer"

export default function UserProPropFile () {

    const filter = true

    return (

        <div>

        <PostContainer filter={filter} fetchUrl={("/posts/")}/>
        
        </div>

    )
}