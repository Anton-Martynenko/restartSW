import React from 'react';
import {ProfileType} from "../../../redux/state";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props: ProfileType) => {

    let onAddPost = () => {

        /*props.addPost(props.newPost);*/
        props.dispatch(addPostActionCreator()/*{type: 'ADD-POST'*//*, newPost: props.newPost*//*}*/)
        /*if (newPostText.current) {
            props.addPost(newPostText.current.value);
            props.updateNewPostText('');
        }*/

    }

    let onPostChange = (text: string) => {
        /*props.updateNewPostText(e.currentTarget.value)*/
        props.dispatch(updateNewPostTextActionCreator(text)/*{type: 'UPDATE-NEW-POST-TEXT', newPost: e.currentTarget.value}*/)
        /*if (newPostText.current) {
            props.updateNewPostText(newPostText.current.value);
        }*/
    }

    return (
        <MyPosts updateNewPostText={onPostChange}
                 addPost={onAddPost}
                 posts={props.posts}
                 newPost={props.newPost}/>
    )
}

export default MyPostsContainer;