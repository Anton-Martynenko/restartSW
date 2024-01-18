import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: number,
    name: string
}

export type MessageType = {
    message: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props: MessageType) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
}

const Dialogs = () => {
    let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Natasha'}
    ]

    let messages = [
        {id: 1, message: 'Hi!'},
        {id: 2, message: 'How is your it-kamasutra?'},
        {id: 3, message: 'Yo!'},
        {id: 4, message: 'Yo!Yo!'}
    ]

    let dialogsElements = dialogs.map(d => <DialogItem id={d.id} name={d.name} />);

    let messagesElements = messages.map(m => <Message message={m.message} />);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;