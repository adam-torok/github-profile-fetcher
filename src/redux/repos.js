import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
const AT = import.meta.env.VITE_GITHUB_ACCESS_TOKEN;

export const fetchRepos = createAsyncThunk('repos/fetchRepos', (name) => {
	return fetch(`https://api.github.com/users/${name}/repos`, {
		headers: {
			Authorization: `Bearer ${AT}`
		}
	})
		.then((resp) => {
			return resp.json();
		})
		.then((data) => {
			return data;
		});
});

export const repoSlice = createSlice({
	name: 'repos',
	initialState: {
		loading: false,
		repos: [],
		error: ''
	},
	extraReducers: (builder) => {
		builder.addCase(fetchRepos.pending, (state) => {
			state.loading = true;
		}),
        builder.addCase(fetchRepos.fulfilled, (state, action) => {
            state.loading = false;
            state.repos = action.payload;
            state.error = '';
        }),
        builder.addCase(fetchRepos.rejected, (state, action) => {
            state.loading = false;
            state.repos = [];
            state.error = action.error.message;
        });
	}
});

export default repoSlice.reducer;
