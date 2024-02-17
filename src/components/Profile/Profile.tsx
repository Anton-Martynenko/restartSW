import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props: ProfileType) => {

    return <div className={s.content}>
        <ProfileInfo />
        <MyPostsContainer  posts={props.posts}
                  dispatch={props.dispatch}
                  /*addPost={props.addPost}*/
                  newPost={props.newPost}
                  /*updateNewPostText={props.updateNewPostText}*//>
    </div>
}

export default Profile;