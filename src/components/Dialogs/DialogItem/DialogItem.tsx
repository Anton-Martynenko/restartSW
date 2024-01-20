import React from 'react';
import s from "./../Dialogs.module.css";
import {NavLink} from "react-router-dom";

export type DialogItemType = {
    id: number,
    name: string
}

const DialogItem = (props: DialogItemType) => {
    return (
        <div className={s.dialog}>
            <NavLink to={'/dialogs/' + props.id}>{props.name}</NavLink>
        </div>
    )
}


    /*let dialogs = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Valera'},
        {id: 3, name: 'Viktor'},
        {id: 4, name: 'Katya'},
        {id: 5, name: 'Natasha'}
    ]*/


export default DialogItem;