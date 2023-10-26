import { configureStore } from "@reduxjs/toolkit"
import profileReducer from './profile'
import repoReducer from './repos'
import settingsReducer from './settings'

export default configureStore({
    reducer: {
        profile: profileReducer,
        repos: repoReducer,
        settings: settingsReducer
    }
})