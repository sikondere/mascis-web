import { createSlice } from '@reduxjs/toolkit'
import {drugs} from './data'

export const artOrderSlice = createSlice({
    name: 'artOrder',
    initialState: {
        orderHeader: {},
        drugDetails: drugs,
        adultPatients: [{}],
        padiatricPatients: [{}],
        fluconazolePatients: [{}],
        otherPatients: [{}],
    },
    reducers: {
        newDrugDetails: (state, action) => {
            state.drugDetails = action.payload
        },
        updateDrugDetails: (state, action) => {
            state.drugDetails.map(row => {
                if (row['order'] === action.payload['order']) {
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