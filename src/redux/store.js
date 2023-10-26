import { configureStore } from "@reduxjs/toolkit"
import profileReducer from './profile'
import repoReducer from './repos'

export default configureStore({
    reducer: {
        profile: profileReducer,
        repos: repoReducer
    }
})