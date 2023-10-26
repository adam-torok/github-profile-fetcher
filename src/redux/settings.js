import { createSlice } from '@reduxjs/toolkit';

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
        darkMode: true
    },
	reducers: {
		toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode;

            if(state.darkMode){
                document.querySelector('#app').classList.add('dark');
            }else{
                document.querySelector('#app').classList.remove('dark');
            }
		},
	}
});

export const { toggleDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;
