import React from 'react';
import s from "./Post.module.css";


export type PostPropsType = {
    message: string,
    likesCount: number
}

const Post = (props: PostPropsType) => {
    return (
            <div>
                <div className={s.item}>
                    <img src="https://interesnyefakty.org/wp-content/uploads/vladimir-mashkov.jpg"/>
                    {props.message}
                    <div>
                        <span>likes: {props.likesCount}</span>
                    </div>
                </div>
            </div>
    )
}

export default Post;