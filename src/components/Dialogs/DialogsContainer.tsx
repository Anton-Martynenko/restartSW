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
import StoreContext from "../../StoreContext";

const DialogsContainer = (/*props: DialogType*/) => {

    /*let newMessageText = useRef<any>();*/
    /*let addNewMessage = () => {
        /!*let message = newMessageText.current.value;
        alert(message);*!/
        /!*if (newMessageText.current) {*!/
            /!*props.addMessage(newMessageText.current.value);*!/
            props.dispatch(addMessageActionCreator(props.newMessage))
        /!*}*!/
    }

    let updateNewDialogMessage = (newMessage: string) => {
        /!*if (newMessageText.current) {*!/
            props.dispatch(updateNewDialogMessageActionCreator(newMessage))
        /!*}*!/
    }*/

    return (
        <StoreContext.Consumer>
            {(store) => {

                let state = store.getState();

                let addNewMessage = () => {
                    store.dispatch(addMessageActionCreator(state.dialogPage.newMessage))
                }

                let updateNewDialogMessage = (newMessage: string) => {
                    store.dispatch(updateNewDialogMessageActionCreator(newMessage))
                }
        return <Dialogs dialogs={state.dialogPage.dialogs}
                 messages={state.dialogPage.messages}
                 addMessage={addNewMessage}
                 updateMessage={updateNewDialogMessage}
                 newMessage={state.dialogPage.newMessage} />
            }
            }
        </StoreContext.Consumer>
    )
}

export default DialogsContainer;