import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: string,
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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem id='1' name='Dimych' />
                <DialogItem id='2' name='Valera' />
                <DialogItem id='3' name='Viktor' />
                <DialogItem id='4' name='Katya' />
                <DialogItem id='5' name='Natasha' />
            </div>
            <div className={s.messages}>
                <Message message="Hi!" />
                <Message message="How is your it-kamasutra?" />
                <Message message="Yo!" />
            </div>
        </div>
    )
}

export default Dialogs;