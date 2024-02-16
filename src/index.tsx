import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import state, {
    addMessage,
    addPost,
    AllType,
    RootStateType,
    StateType,
    subscribe,
    updateNewPostText
} from "./redux/state";
import store, {RootReducerType} from "./redux/reduxStore";


export const renderEntireTree = (state: RootReducerType) => {
    const root = ReactDOM.createRoot(
        document.getElementById('root') as HTMLElement
    );
    root.render(
        <React.StrictMode>
            <App state={store.getState()}
                 dispatch={store.dispatch.bind(store)}
                 /*addPost={store.addPost.bind(store)}*/
                 /*addMessage={store.addMessage.bind(store)}*/
                 /*updateNewPostText={store.updateNewPostText.bind(store)}*//>
        </React.StrictMode>
    );

    reportWebVitals();
}

renderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    renderEntireTree(state);
});

/*const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App dialogPage={state.dialogPage} profilePage={state.profilePage} addPost={addPost}/>
  </React.StrictMode>
);*/

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
/*reportWebVitals();*/
