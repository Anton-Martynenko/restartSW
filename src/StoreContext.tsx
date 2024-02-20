import React from "react";
import {RootReducerType} from "./redux/reduxStore";
import {StoreType} from "./redux/state";

const StoreContext = React.createContext({} as StoreType);

export default StoreContext;