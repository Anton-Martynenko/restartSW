import React, {forwardRef, useRef} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfilePageType} from "../../../redux/state";



const MyPosts = (props: ProfilePageType) => {

    /*let posts = [
        {id: 1, message: 'Hello!', likesCount: 27},
        {id: 2, message: 'My first post', likesCount: 5}
    ]*/

    let postsElements = props.posts ? props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>) : '';
    let newPostText = useRef<any>();
    let addPostElement = () => {
        let text = newPostText.current.value;
        alert(text);
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea ref={newPostText}></textarea>
                </div>
                <div>
                    <button onClick={addPostElement}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

export default MyPosts;