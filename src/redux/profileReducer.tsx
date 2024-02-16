import React from 'react';
import {
    ActionsTypes,
    AddPostActionType,
    PostsType,
    ProfilePageType,
    RootStateType,
    UpdateNewPostTextType
} from "./state";

let initialState = {
    posts: [
        {id: 1, message: 'Hello!', likesCount: 27},
        {id: 2, message: 'My first post', likesCount: 5}
    ],
    newPost: ""
}

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-POST':
            let newPost: PostsType = {
                id: 5,
                message: /*action.newPost*/ state.newPost,
                likesCount: 0
            };

            state.posts.push(newPost);
            state.newPost = '';
            break;
        case 'UPDATE-NEW-POST-TEXT':
            state.newPost = action.newPost;
            break;
    }

    return state;
}

export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    } as const
};

export const updateNewPostTextActionCreator = (newPost: string): UpdateNewPostTextType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newPost: newPost} as const
};