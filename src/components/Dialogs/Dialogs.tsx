import React from 'react';
import s from "./Dialogs.module.css";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog}>
                    Dimych
                </div>
                <div className={s.dialog}>
                    Valera
                </div>
                <div className={s.dialog}>
                    Viktor
                </div>
                <div className={s.dialog}>
                    Katya
                </div>
                <div className={s.dialog}>
                    Natasha
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