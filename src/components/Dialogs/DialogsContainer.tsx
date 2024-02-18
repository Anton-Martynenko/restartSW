import React, {ChangeEvent, useRef} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessage,
    DialogPageType,
    DialogType,
} from "../../redux/state";
import {addMessageActionCreator, updateNewDialogMessageActionCreator} from "../../redux/dialogsReducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props: DialogType) => {

    /*let newMessageText = useRef<any>();*/
    let addNewMessage = () => {
        /*let message = newMessageText.current.value;
        alert(message);*/
        /*if (newMessageText.current) {*/
            /*props.addMessage(newMessageText.current.value);*/
            props.dispatch(addMessageActionCreator(props.newMessage))
        /*}*/
    }

    let updateNewDialogMessage = (newMessage: string) => {
        /*if (newMessageText.current) {*/
            props.dispatch(updateNewDialogMessageActionCreator(newMessage))
        /*}*/
    }

    return (
        <Dialogs dialogs={props.dialogs}
                 messages={props.messages}
                 addMessage={addNewMessage}
                 updateMessage={updateNewDialogMessage}
                 newMessage={props.newMessage} />
    )
}

export default DialogsContainer;