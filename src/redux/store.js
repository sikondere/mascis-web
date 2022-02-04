import { configureStore } from '@reduxjs/toolkit'
import artOrderReducer from './lmis/art/orderSlice'

export default configureStore({
    reducer: {
        artOrder: artOrderReducer,
    },
})