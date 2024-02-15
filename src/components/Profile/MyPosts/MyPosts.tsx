import React, {ChangeEvent} from 'react';
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import {ProfileType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";

const MyPosts = (props: ProfileType) => {

    let postsElements = props.posts ? props.posts.map(p => <Post message={p.message} likesCount={p.likesCount}/>) : '';
    /*let newPostText = React.createRef<HTMLTextAreaElement>();*/
    let addPostElement = () => {

        /*props.addPost(props.newPost);*/
        props.dispatch(addPostActionCreator()/*{type: 'ADD-POST'*//*, newPost: props.newPost*//*}*/)
        /*if (newPostText.current) {
            props.addPost(newPostText.current.value);
            props.updateNewPostText('');
        }*/

    }

    let onPostChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*props.updateNewPostText(e.currentTarget.value)*/
        props.dispatch(updateNewPostTextActionCreator(e.currentTarget.value)/*{type: 'UPDATE-NEW-POST-TEXT', newPost: e.currentTarget.value}*/)
        /*if (newPostText.current) {
            props.updateNewPostText(newPostText.current.value);
        }*/
    }

    return (
        <div className={s.postsBlock}>
            <h3>My Posts</h3>
            <div>
                <div>
                    <textarea
                              value={props.newPost}
                              onChange={onPostChange}/>
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