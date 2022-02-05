import { createSlice } from '@reduxjs/toolkit'
// import {drugs} from './data'

export const artOrderSlice = createSlice({
    name: 'artOrder',
    initialState: {
        orderHeader: null,
        drugDetails: null,
        adultPatients: null,
        padiatricPatients: null,
        fluconazolePatients: null,
        otherPatients: null,
    },
    reducers: {
        newDrugDetails: (state, action) => {
            state.drugDetails = action.payload
        },
        updateDrugDetails: (state, action) => {
            state.drugDetails.map(row => {
                if (row['drugId'] === action.payload['drugId']) {
                    row[action.payload.column] = action.payload.value
                    return row
                }
                else {
                    return row
                }
            })
        },
        updateOrder: (state, order) => {
            
        },
        deleteOrder: (state, orderId) => {
            
        },
    },
})

export const { newDrugDetails, updateDrugDetails, updateOrder, deleteOrder } = artOrderSlice.actions

export default artOrderSlice.reducer