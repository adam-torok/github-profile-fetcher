import { createSlice } from '@reduxjs/toolkit';

const storageKey = 'fetcher-app-dark-mode';

const setInitDarkMode = () => {
    // Cannot store boolean in localstore so I have to parse it.
    let mode = JSON.parse(localStorage.getItem(storageKey));
    if(mode){
        document.querySelector('#app').classList.add('dark');
        return true;
    }else{
        document.querySelector('#app').classList.remove('dark');
        return false;
    }
};

const setToDark = () => {
	localStorage.setItem(storageKey, JSON.stringify(true));
	document.querySelector('#app').classList.add('dark');
	return true;
};

const setToLight = () => {
	localStorage.setItem(storageKey, JSON.stringify(false));
	document.querySelector('#app').classList.remove('dark');
	return false;
};

export const settingsSlice = createSlice({
	name: 'settings',
	initialState: {
		darkMode: setInitDarkMode()
	},
	reducers: {
		toggleDarkMode: (state) => {
			state.darkMode = !state.darkMode;
            console.log(state.darkMode);
			if (state.darkMode) {
				setToDark();
			} else {
				setToLight();
			}
		}
	}
});

export const { toggleDarkMode } = settingsSlice.actions;

export default settingsSlice.reducer;
