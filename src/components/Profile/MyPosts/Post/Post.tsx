import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
            <div>
                <div className={s.item}>
                    <img src="https://interesnyefakty.org/wp-content/uploads/vladimir-mashkov.jpg"/>
                    Post 1
                    <div>
                        <span>Like</span>
                    </div>
                </div>
            </div>
    )
}

export default Post;