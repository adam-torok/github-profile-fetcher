import { createSlice } from '@reduxjs/toolkit';

export const repoSlice = createSlice({
	name: 'repos',
	initialState: [],
	reducers: {
		getRepos: (state, action) => {
            console.log(action.payload);
            state = action.payload;
		},
        clearRepos: (state) => {
            console.log('Clearing repositories');
            state = {};
        }
	}
});

export const { getRepos, clearRepos } = repoSlice.actions;

export default repoSlice.reducer;
