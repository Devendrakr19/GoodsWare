import { configureStore } from '@reduxjs/toolkit';
import authSReducer from "../redux/slices/authSlice";
export const store = configureStore({
    reducer:{
        auth: authSReducer
    }
})