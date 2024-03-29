import React from "react";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type DialogsType = {
    id: number,
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
    /*addPost: (newMessage: string) => void
    updateNewPostText: (newPost: string) => void*/
    dispatch: (action: ActionsTypes) => void
}

export type MyPostsType = {
    posts: Array<PostsType>
    newPost: string
    addPost: (newMessage: string) => void
    updateNewPostText: (newPost: string) => void
    /*dispatch: (action: ActionsTypes) => void*/
}

export type DialogPageType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    newMessage: string

}

export type DialogType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    /*addMessage: (newMessage: string) => void*/
    newMessage: string
    dispatch: (action: ActionsTypes) => void
}

export type DialogPresentationType = {
    dialogs: Array<DialogsType>
    messages: Array<MessagesType>
    addMessage: (newMessage: string) => void
    updateMessage: (newMessage: string) => void
    newMessage: string
}

export type StateType = {
    dialogPage: DialogPageType
    profilePage: ProfilePageType
    /*addPost?: (newMessage: string) => void*/
}

export type RootStateType = {
    //state: {
        dialogPage: {
            dialogs: Array<DialogsType>
            messages: Array<MessagesType>
            newMessage: string
        }
        profilePage: {
            posts: Array<PostsType>
            newPost: string
        }
    //}

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

export type StoreType = {
    /*state: RootStateType*/
    /*addPost: (newMessage: string) => void*/
    /*addMessage: (newMessage: string) => void*/
    /*updateNewPostText: (newPost: string) => void*/
    subscribe: (observer: () => void) => void
    /*renderEntireTree: () => void*/
    getState: () => RootStateType
    dispatch: (action: ActionsTypes) => void
}

export type ActionsTypes = AddPostActionType |
    UpdateNewPostTextType |
    AddMessageActionType |
    UpdateNewDialogMessageActionType

export type AddPostActionType = {
    type: 'ADD-POST'
    /*newPost: string*/
}

export type UpdateNewPostTextType = {
    type: 'UPDATE-NEW-POST-TEXT'
    newPost: string
}

export type AddMessageActionType = {
    type: 'ADD-MESSAGE'
    newMessage: string
}

export type UpdateNewDialogMessageActionType = {
    type: 'UPDATE-NEW-DIALOG-MESSAGE'
    newMessage: string
}

/*export const addPostActionCreator = (): AddPostActionType => {
    return {
        type: "ADD-POST"
    } as const
};*/

/*export const addMessageActionCreator = (newMessage: string): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE', newMessage: newMessage
    } as const
}*/

/*export const updateNewPostTextActionCreator = (newPost: string): UpdateNewPostTextType => {
    return {type: 'UPDATE-NEW-POST-TEXT', newPost: newPost} as const
};*/

/*export const updateNewDialogMessageActionCreator = (newMessage: string): UpdateNewDialogMessageActionType => {
    return {
        type: 'UPDATE-NEW-DIALOG-MESSAGE', newMessage: newMessage
    } as const
}*/

export const addPost = (newMessage: string) => {

    let newPost: PostsType = {
        id: 5,
        message: state.profilePage.newPost,
        likesCount: 0
    };

    state.profilePage.posts.push(newPost);
    renderEntireTree();
}

export const addMessage = (newMessage: string) => {

    let newMessageText: MessagesType = {
        id: 5,
        message: newMessage
    };

    state.dialogPage.messages.push(newMessageText);
    renderEntireTree();
}

export const updateNewPostText = (newPost: string) => {
    state.profilePage.newPost = newPost;
    renderEntireTree();
}

export const store = {
    state:  {
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
            ],
            newMessage: ""
        },
        profilePage: {
            posts: [
                {id: 1, message: 'Hello!', likesCount: 27},
                {id: 2, message: 'My first post', likesCount: 5}
            ],
            newPost: ""
        }
    },
    renderEntireTree (state: StateType) {
        console.log('State Changed')
    },
    /*addPost (newMessage: string) {

        let newPost: PostsType = {
            id: 5,
            message: newMessage/!*this.state.profilePage.newPost*!/,
            likesCount: 0
        };

        this.state.profilePage.posts.push(newPost);
        this.renderEntireTree(this.state);
    },*/
    /*addMessage (newMessage: string) {

        let newMessageText: MessagesType = {
            id: 5,
            message: newMessage
        };

        this.state.dialogPage.messages.push(newMessageText);
        this.renderEntireTree(this.state);
    },*/
    /*updateNewPostText (newPost: string) {
        this.state.profilePage.newPost = newPost;
        this.renderEntireTree(this.state);
    },*/
    subscribe (observer: any) {
        this.renderEntireTree = observer;
    },
    getState () {
        return this.state;
    },
    dispatch (action: any) {

        this.state.profilePage = profileReducer(this.state.profilePage, action);
        this.state.dialogPage = dialogsReducer(this.state.dialogPage, action);
        this.renderEntireTree(this.state);

        /*if (action.type === 'ADD-POST') {
            let newPost: PostsType = {
                id: 5,
                message: /!*action.newPost*!/ this.state.profilePage.newPost,
                likesCount: 0
            };

            this.state.profilePage.posts.push(newPost);
            this.state.profilePage.newPost = '';
            this.renderEntireTree(this.state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this.state.profilePage.newPost = action.newPost;
            this.renderEntireTree(this.state);
        } else if (action.type === 'ADD-MESSAGE') {
            let newMessage: MessagesType = {
                id: 10,
                message: action.newMessage
            }
            this.state.dialogPage.messages.push(newMessage);
            this.state.dialogPage.newMessage = '';
            this.renderEntireTree(this.state);
        } else if (action.type === 'UPDATE-NEW-DIALOG-MESSAGE') {
            this.state.dialogPage.newMessage = action.newMessage;
            this.renderEntireTree(this.state)
        }*/
    }
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

let renderEntireTree = () => {
    console.log('State Changed')
}

export const subscribe = (observer: () => void) => {
    renderEntireTree = observer;
}

export default state;