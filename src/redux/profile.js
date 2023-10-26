import { createSlice } from "@reduxjs/toolkit";

export const profileSlice = createSlice({
    name: 'profile',
    initialState: {},
    reducers: {
        refreshProfile: (state, action) => {
            state.profile = action.payload
        },
    }
})

export const { refreshProfile } = profileSlice.actions

export default profileSlice.reducer;