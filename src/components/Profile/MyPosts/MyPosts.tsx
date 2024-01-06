import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>
            <Post message="Hello!" likesCount={27}/>
            <Post message="My first post" likesCount={5}/>
        </div>
    )
}

export default MyPosts;