import React, {useRef} from 'react';
import s from "./../Dialogs.module.css";

export type MessageType = {
    message: string
}

const Message = (props: MessageType) => {

    return (
        <div>
            <div className={s.message}>{props.message}</div>
        </div>
    )
}

export default Message;