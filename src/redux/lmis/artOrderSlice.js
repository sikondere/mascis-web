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
            let newOrder = [...action.payload]
            newOrder.map((row) => {
                let newRow = Object.assign({}, row)
                newRow['openingBalance'] = null
                newRow['quantityReceived'] = null
                newRow['ancConsumption'] = null
                newRow['artConsumption'] = null
                newRow['lossesAdjustments'] = null
                newRow['closingBalance'] = null
                newRow['monthsOfStockOnHand'] = null
                newRow['quantityRequiredCurrentPatients'] = null
                newRow['estimatedNewPatients'] = null
                newRow['estimatedPositivePregnant'] = null
                newRow['drugsRequiredNewPatients'] = null
                newRow['totalDrugsRequired'] = null
                newRow['notes'] = null
                return newRow
            })
            newOrder.sort((a, b) => a.order - b.order)
            state.drugDetails = newOrder
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
            let newOrder = [...action.payload]
            newOrder = newOrder.filter((row) =>  row['patient'] === 'Adult' )
            newOrder.map((row) => {
                let newRow = Object.assign({}, row)
                newRow['no_existing'] = null
                newRow['no_new'] = null
                newRow['preg_existing'] = null
                newRow['preg_new'] = null
                return newRow
            })
            newOrder.sort((a, b) => a.order - b.order)
            state.adultPatients = newOrder
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
            let newOrder = [...action.payload]
            newOrder = newOrder.filter((row) => row['patient'] === 'Paediatric')
            newOrder.map((row) => {
                let newRow = Object.assign({}, row)
                newRow['no_existing'] = null
                newRow['no_new'] = null
                return newRow
            })
            newOrder.sort((a, b) => a.order - b.order)
            state.paediatricPatients = newOrder
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
            let newOrder = [...action.payload]
            newOrder.map((row) => {
                let newRow = Object.assign({}, row)
                newRow['no_existing'] = null
                newRow['no_new'] = null
                return newRow
            })
            newOrder.sort((a, b) => a.order - b.order)
            state.fluconazolePatients = newOrder
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
            let newOrder = [...action.payload]
            newOrder.map((row) => {
                let newRow = Object.assign({}, row)
                newRow['no_existing'] = null
                newRow['no_new'] = null
                return newRow
            })
            newOrder.sort((a, b) => a.order - b.order)
            state.otherPatients = newOrder
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