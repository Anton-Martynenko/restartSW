import React from 'react';
import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return <div>
        <div>
            <img src='https://q-cf.bstatic.com/images/hotel/max1024x768/776/77667840.jpg'/>
        </div>
        <div className={s.descriptionBlock}>
            ava + description
        </div>
    </div>
}

export default ProfileInfo;