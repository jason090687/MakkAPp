import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./Reducer/authSlice";

export default configureStore({
    reducer: {
        auth: authSlice
    }
})