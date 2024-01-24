import React from "react";

export type DialogsType = {
    id?: number,
    name?: string
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
    posts?: Array<PostsType>
}

export type DialogPageType = {
    dialogs?: Array<DialogsType>
    messages?: Array<MessagesType>
}

export type StateType = {
    dialogPage?: DialogPageType
    profilePage?: ProfilePageType
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

export default state;