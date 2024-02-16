import {combineReducers, legacy_createStore as createStore} from "redux";
import {profileReducer} from "./profileReducer";
import {dialogsReducer} from "./dialogsReducer";

export type RootReducerType = ReturnType<typeof rootReducer>;

let rootReducer = combineReducers({
    profilePage: profileReducer,
    dialogPage: dialogsReducer
})

let store = createStore(rootReducer)

export default store;

