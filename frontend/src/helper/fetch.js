import React, {useState, useEffect} from 'react'


const useFetchRequest = url => {
    const [postsList, setPostsList] = useState([])
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    
    function fetchPosts() {
        fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log("data from fetch" +data)
            data.allPosts && setPostsList(data.allPosts) && setIsLoaded(true)
        })
        .catch(err => {
            console.log(err)
            setError(error);
            setIsLoaded(false)
        })
    }

    useEffect(() => {fetchPosts(url)}, [url]);
  
    return { error, isLoaded, postsList };
  };

  export default useFetchRequest