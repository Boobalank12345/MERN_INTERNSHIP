import { useState } from "react";

const UseEffectAPI=()=>{
    var[post,setPost]=useState([])
    useEffect(()=>{
        var response=axios
            .get("https://jsonplaceholer.typicode.com/posts/")
            .then((res)=>{
                console.log(res.data)
                setPost(res.data)
            })
    },[])
    return(
        <div>
            <h2>This page is ment for useEffect with API</h2>
            <h3>The contents inside my JSONPlaceholder API posts are</h3>
            <h4> 
                {post.map((element)=>{
                    <li key={post.id}>{post.title}</li>
                })}
            </h4>
            </div>

    );
};
export default UseEffectAPI;