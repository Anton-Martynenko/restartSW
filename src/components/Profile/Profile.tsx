import React from 'react';
import s from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePageType} from "../../redux/state";

export type PostPropsType = {
    id: number,
    message: string,
    likesCount: number
}

/*export type PostsType = {
    posts: Array<PostPropsType>
}*/

const Profile = (props: ProfilePageType) => {

    let posts = [
        {id: 1, message: 'Hello!', likesCount: 27},
        {id: 2, message: 'My first post', likesCount: 5}
    ]

    return <div className={s.content}>
        <ProfileInfo />
        <MyPosts  posts={props.posts}/>
    </div>
}

export default Profile;