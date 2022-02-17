import { createSlice } from '@reduxjs/toolkit'

export const hivTestKitOrderSlice = createSlice({
    name: 'hivTestKitOrderSlice',
    initialState: {
        orderHeader: null,
        itemDetails: null,
        useSummary: null,
    },
    reducers: {
        newOrder: (state, action) => {
            
        },
        updateOrder: (state, action) => {

        },
        newItemDetails: (state, action) => {
            let newOrder = [...action.payload]
            newOrder = newOrder.map((row) => {
                let newRow = Object.assign({}, row)
                newRow['testsAvailable'] = null
                newRow['totalTests'] = null
                newRow['usedTests'] = null
                newRow['lossesAdjustments'] = null
                newRow['remainingTests'] = null
                newRow['maxStockQuantity'] = null
                newRow['quantityRequired'] = null
                newRow['quantityToShip'] = null
                return newRow
            })
            newOrder.sort((a, b) => a.order - b.order)
            state.itemDetails = newOrder
        },
        updateItemDetails: (state, action) => {

        },
        newUseSummary: (state, action) => {
            let newOrder = [...action.payload]
            const items = [1, 2, 3]
            newOrder = newOrder.filter((row) => {
                return items.includes(row['itemId'])
            })
            newOrder = newOrder.map((row) => {
                let newRow = Object.assign({}, row)
                newRow['hct'] = null
                newRow['PMTCTeMTCT'] = null
                newRow['ClinicalDiagnosis'] = null
                newRow['smc'] = null
                return newRow
            })
            newOrder.sort((a, b) => a.order - b.order)   
            state.useSummary = newOrder
        },
        updateUseSummary: (state, action) => {

        },
    },
})

export const { 
    newOrder, 
    updateOrder, 
    newItemDetails, 
    updateItemDetails, 
    newUseSummary, 
    updateUseSummary, } = hivTestKitOrderSlice.actions 

export default hivTestKitOrderSlice.reducer