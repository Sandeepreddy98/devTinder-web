import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import feedReducer from './feedSlice';
import connectionReduer from './connectionSlice';

const appStore = configureStore({
    reducer : {
        user : userReducer,
        feed : feedReducer,
        connections : connectionReduer,
    }
})

export default appStore