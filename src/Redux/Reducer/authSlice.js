import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: {
            Username: ''
        }
    },
    reducers: {
        storeUser: (state, action) => {
            state.user = action.payload
        }
    }
})

export const { storeUser } = authSlice.actions

export default authSlice.reducer