import React from 'react';
import s from "./Dialogs.module.css";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/1'>Dimych</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to='/dialogs/2'>Valera</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/3">Viktor</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/4">Katya</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/dialogs/5">Natasha</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi!</div>
                <div className={s.message}>How is your it-kamasutra?</div>
                <div className={s.message}>Yo!</div>
            </div>
        </div>
    )
}

export default Dialogs;