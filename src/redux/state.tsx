import React from "react";

export type DialogsType = {
    id?: number,
    name: string
}

export type MessagesType = {
    id: number
    message: string
}

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    newPost: string
    /*addPost?: (newMessage: string) => void*/
}

export type ProfileType = {
    posts: Array<PostsType>
    newPost: string
    addPost: (newMessage: string) => void
    updateNewPostText: (newPost: string) => void
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
}

export type DialogType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    addMessage: (newMessage: string) => void
}

export type StateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    /*addPost?: (newMessage: string) => void*/
}

export type RootStateType = {
    state: {
        dialogPage: {
            dialogs: Array<DialogsType>
            messages: Array<MessagesType>
        }
        profilePage: {
            posts: Array<PostsType>
            newPost: string
        }
    }

}

export type AllType = {
    state: {
        dialogPage: {
            dialogs: Array<DialogsType>
            messages: Array<MessagesType>
        }
        profilePage: {
            posts: Array<PostsType>
            newPost: string
        }
    }
    addPost: (newMessage: string) => void
    addMessage: (newMessage: string) => void
    updateNewPostText: (newPost: string) => void
}

export const addPost = (newMessage: string) => {

    let newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPost,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree(state);
}

export const addMessage = (newMessage: string) => {

    let newMessageText: MessagesType = {
        id: 5,
        message: newMessage
    };

    state.dialogPage.messages.push(newMessageText);
    renderEntireTree(state);
}

export const updateNewPostText = (newPost: string) => {
    state.profilePage.newPost = newPost;
    renderEntireTree(state);
}

let state = {
    dialogPage: {
        dialogs: [
            {id: 1, name: 'Dimych'},
            {id: 2, name: 'Valera'},
            {id: 3, name: 'Viktor'},
            {id: 4, name: 'Katya'},
            {id: 5, name: 'Natasha'}
        ],
        messages: [
            {id: 1, message: 'Hi!'},
            {id: 2, message: 'How is your it-kamasutra?'},
            {id: 3, message: 'Yo!'},
            {id: 4, message: 'Yo!Yo!'}
        ]
    },
    profilePage: {
        posts: [
            {id: 1, message: 'Hello!', likesCount: 27},
            {id: 2, message: 'My first post', likesCount: 5}
        ],
        newPost: ""
    }
}

let renderEntireTree = (state: StateType) => {
    console.log('State Changed')
}

export const subscribe = (observer: any) => {
    renderEntireTree = observer;
}

export default state;