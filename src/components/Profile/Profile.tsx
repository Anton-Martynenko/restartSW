import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfileType} from "../../redux/state";

const Profile = (props: ProfileType) => {

    return <div className={s.content}>
        <ProfileInfo />
        <MyPosts  posts={props.posts}
                  addPost={props.addPost}
                  newPost={props.newPost}
                  updateNewPostText={props.updateNewPostText}/>
    </div>
}

export default Profile;