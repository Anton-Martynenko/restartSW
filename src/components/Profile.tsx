import React from 'react';
import s from "./Profile.module.css";

const Profile = () => {
    return <div className={s.content}>
        <div>
            <img src='https://q-cf.bstatic.com/images/hotel/max1024x768/776/77667840.jpg'/>
        </div>
        <div>
            ava + description
        </div>
        <div>
            My Posts
            <div>
                New Post
            </div>
            <div>
                <div className={s.item}>
                    Post 1
                </div>
                <div>
                    Post 1
                </div>
            </div>
        </div>
    </div>
}

export default Profile;