import { configureStore } from '@reduxjs/toolkit'
import artOrderReducer from './lmis/artOrderSlice'

export default configureStore({
    reducer: {
        artOrder: artOrderReducer,
    },
})