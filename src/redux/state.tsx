import React from "react";



export type DialogsType = {
    id?: number,
    name: string
}

export type MessagesType = {
    message: string
}

export type PostsType = {
    id: number,
    message: string,
    likesCount: number
}

export type ProfilePageType = {
    posts: Array<PostsType>
    /*addPost?: (newMessage: string) => void*/
}

export type ProfileType = {
    posts: Array<PostsType>
    addPost: (newMessage: string) => void
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
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
        }
    }
    addPost: (newMessage: string) => void
}

export const addPost = (newMessage: string) => {
    debugger;
    let newPost: PostsType = {
        id: 5,
        message: newMessage,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
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
        ]
    }
}

let renderEntireTree = (state: StateType) => {
    console.log('State Changed')
}

export const subscribe = (observer: any) => {
    renderEntireTree = observer;
}

export default state;