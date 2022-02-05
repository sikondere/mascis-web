import { createSlice } from '@reduxjs/toolkit'

export const artOrderSlice = createSlice({
    name: 'artOrder',
    initialState: {
        orderHeader: null,
        drugDetails: null,
        adultPatients: null,
        paediatricPatients: null,
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
        newAdultPatients: (state, action) => {
            state.adultPatients = action.payload
        },
        updateAdultPatients: (state, action) => {
            state.adultPatients.map(row => {
                if (row['drugId'] === action.payload['drugId']) {
                    row[action.payload.column] = action.payload.value
                    return row
                }
                else {
                    return row
                }
            })
        },
        newPaediatricPatients: (state, action) => {
            state.paediatricPatients = action.payload
        },
        updatePaediatricPatients: (state, action) => {
            state.paediatricPatients.map(row => {
                if (row['drugId'] === action.payload['drugId']) {
                    row[action.payload.column] = action.payload.value
                    return row
                }
                else {
                    return row
                }
            })
        },
        newFluconazolePatients: (state, action) => {
            state.fluconazolePatients = action.payload
        },
        updateFluconazolePatients: (state, action) => {
            state.fluconazolePatients.map(row => {
                if (row['drugId'] === action.payload['drugId']) {
                    row[action.payload.column] = action.payload.value
                    return row
                }
                else {
                    return row
                }
            })
        },
        newOtherPatients: (state, action) => {
            state.otherPatients = action.payload
        },
        updateOtherPatients: (state, action) => {
            state.otherPatients.map(row => {
                if (row['drugId'] === action.payload['drugId']) {
                    row[action.payload.column] = action.payload.value
                    return row
                }
                else {
                    return row
                }
            })
        },
    },
})

export const { 
    newDrugDetails, 
    updateDrugDetails, 
    newAdultPatients,
    updateAdultPatients,
    newPaediatricPatients,
    updatePaediatricPatients,
    newFluconazolePatients,
    updateFluconazolePatients,
    newOtherPatients,
    updateOtherPatients,
} = artOrderSlice.actions

export default artOrderSlice.reducer