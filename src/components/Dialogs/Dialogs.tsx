import React, {ChangeEvent, useRef} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {
    addMessage,
    DialogPageType, DialogPresentationType,
    DialogType,
} from "../../redux/state";
import {addMessageActionCreator, updateNewDialogMessageActionCreator} from "../../redux/dialogsReducer";

const Dialogs = (props: DialogPresentationType) => {

    let dialogsElements = props.dialogs ? props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />) : '';

    let messagesElements = props.messages ? props.messages.map(m => <Message message={m.message} />) : '';

    /*let newMessageText = useRef<any>();*/
    let addMessageElement = () => {
        /*let message = newMessageText.current.value;
        alert(message);*/
        /*if (newMessageText.current) {*/
            props.addMessage(props.newMessage);
            /*props.dispatch(addMessageActionCreator(props.newMessage))*/
    }

    let updateNewMessage = (e: ChangeEvent<HTMLTextAreaElement>) => {
        /*if (newMessageText.current) {*/
            props.updateMessage(e.currentTarget.value);
        /*}*/
            /*props.dispatch(updateNewDialogMessageActionCreator(e.currentTarget.value))*/
        /*}*/
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea /*ref={newMessageText}*/
                              onChange={updateNewMessage}
                              value={props.newMessage}
                              placeholder={'Enter your message'} />
                </div>
                <div>
                    <button onClick={addMessageElement}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;