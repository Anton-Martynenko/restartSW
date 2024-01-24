import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state from "./redux/state";

export type DialogItemType = {
    id: number,
    name: string
}

export type MessageType = {
    message: string
}

export type PostType = {
    id: number,
    message: string,
    likesCount: number
}




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



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App dialogPage={state.dialogPage} profilePage={state.profilePage}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
