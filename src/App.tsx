import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Music from "./components/Music/Music";
import News from "./components/News/News";
import Settings from "./components/Settings/Settings";
import {
    ActionsTypes,
    AddPostActionType,
    AllType,
    RootStateType,
    StateType,
    store,
    StoreType,
    UpdateNewPostTextType
} from "./redux/state";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    state: RootStateType
    /*addPost: (newMessage: string) => void*/
    /*addMessage: (newMessage: string) => void*/
    /*updateNewPostText: (newPost: string) => void*/
    dispatch: (action: ActionsTypes) => void
}

const App = (props: AppPropsType) => {

    return (
        <BrowserRouter>

            <div className='app-wrapper'>
                <Header/>
                <Navbar/>
                <div className='app-wrapper-content'>
                    <Routes>
                        <Route path='/dialogs/*' element={<DialogsContainer dialogs={props.state.dialogPage.dialogs}
                                                                   messages={props.state.dialogPage.messages}
                                                                   newMessage={props.state.dialogPage.newMessage}
                                                                   dispatch={props.dispatch}
                                                                   /*addMessage={props.addMessage}*//>}/>
                        <Route path='/profile' element={<Profile posts={props.state.profilePage.posts}
                                                                 dispatch={props.dispatch}
                                                                 /*addPost={props.addPost}*/
                                                                 newPost={props.state.profilePage.newPost}
                                                                 /*updateNewPostText={props.updateNewPostText}*//>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>

        </BrowserRouter>);
}

export default App;

