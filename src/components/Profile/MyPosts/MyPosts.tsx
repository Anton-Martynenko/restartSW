import React from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfileType} from "../../../redux/state";

const MyPosts = (props: ProfileType) => {

    let postsElements = props.posts ? props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>) : '';
    let newPostText = React.createRef<HTMLTextAreaElement>();
    let addPostElement = () => {
        if (newPostText.current) {
            props.addPost(newPostText.current.value);
        }

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