import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const useFetch = (url) => {
    const [post, setPost] = useState([]);
   useEffect(() => {
        axios.get(url)
            .then((response) => setPost(response.data))
    },[url])
  return [post]
}

export default useFetch;