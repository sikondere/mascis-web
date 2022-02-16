import { createSlice } from '@reduxjs/toolkit'

export const artRegimenSlice = createSlice({
    name: 'artRegimenSlice',
    initialState: {
        regimens: null,
    },
    reducers: {
        loadRegimens: (state, action) => {
            state.regimens = action.payload
        },
        addRegimen: (state, action) => {
    
        },
        updateRegimen: (state, action) => {
    
        },
    },
})

export const {
    loadRegimens,
    addRegimen,
    updateRegimen,
} = artRegimenSlice.actions

export default artRegimenSlice.reducer