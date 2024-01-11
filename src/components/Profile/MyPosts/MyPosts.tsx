import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
            <Post message="Hello!" likesCount={27}/>
            <Post message="My first post" likesCount={5}/>
            </div>
        </div>
    )
}

export default MyPosts;