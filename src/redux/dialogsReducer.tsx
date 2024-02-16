import React from 'react';
import {
    ActionsTypes,
    AddMessageActionType,
    DialogPageType,
    MessagesType,
    RootStateType,
    UpdateNewDialogMessageActionType
} from "./state";

let initialState = {
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
}

export const dialogsReducer = (state: DialogPageType = initialState, action: ActionsTypes) => {
    switch (action.type) {
        case 'ADD-MESSAGE':
            let newMessage: MessagesType = {
                id: 10,
                message: action.newMessage
            }
            state.messages.push(newMessage);
            state.newMessage = '';
            break;
        case 'UPDATE-NEW-DIALOG-MESSAGE':
            state.newMessage = action.newMessage;
            break;
    }

    return state;
}

export const addMessageActionCreator = (newMessage: string): AddMessageActionType => {
    return {
        type: 'ADD-MESSAGE', newMessage: newMessage
    } as const
}

export const updateNewDialogMessageActionCreator = (newMessage: string): UpdateNewDialogMessageActionType => {
    return {
        type: 'UPDATE-NEW-DIALOG-MESSAGE', newMessage: newMessage
    } as const
}