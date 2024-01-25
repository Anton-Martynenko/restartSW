import React, {useRef} from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {DialogPageType} from "../../redux/state";



const Dialogs = (props: DialogPageType) => {

    /*let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Natasha'}
    ]*/

    /*let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!Yo!'}
    ]*/

    let dialogsElements = props.dialogs ? props.dialogs.map(d => <DialogItem id={d.id} name={d.name} />) : '';

    let messagesElements = props.messages ? props.messages.map(m => <Message message={m.message} />) : '';

    let newMessageText = useRef<any>();
    let addMessageElement = () => {
        let message = newMessageText.current.value;
        alert(message);
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
                <div>
                    <textarea ref={newMessageText}></textarea>
                </div>
                <div>
                    <button onClick={addMessageElement}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;