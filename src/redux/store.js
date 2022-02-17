import { configureStore } from '@reduxjs/toolkit'
import artOrderReducer from './lmis/artOrderSlice'
import hivTestKitOrderReducer from './lmis/hivTestKitOrderSlice'
import artReginmenReducer from './utilities/artReginmenSlice'

export default configureStore({
    reducer: {
        artOrder: artOrderReducer,
        hivTestKitOrder: hivTestKitOrderReducer,
        artRegimens: artReginmenReducer,
    },
})