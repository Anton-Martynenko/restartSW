import React from 'react';
import {
    ActionsTypes,
    AddMessageActionType,
    DialogPageType,
    MessagesType,
    RootStateType,
    UpdateNewDialogMessageActionType
} from "./state";

export const dialogsReducer = (state: DialogPageType, action: ActionsTypes) => {
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