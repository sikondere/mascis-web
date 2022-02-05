import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import {Group, Inject, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import { updateDrugDetails, newDrugDetails } from '../../redux/lmis/artOrderSlice'
import { artDrugs } from '../../redux/lmis/data'

const { Grid } = require("@mui/material")

export default function DrugDetails(props) {
    
    const dispatch = useDispatch()
    const order = useSelector((state) => state.artOrder.drugDetails)
    useEffect(() => {
        let newOrder = [...artDrugs]
        newOrder.map((row) => {
            row['openingBalance'] = null
            row['quantityReceived'] = null
            row['ancConsumption'] = null
            row['artConsumption'] = null
            row['lossesAdjustments'] = null
            row['closingBalance'] = null
            row['monthsOfStockOnHand'] = null
            row['quantityRequiredCurrentPatients'] = null
            row['estimatedNewPatients'] = null
            row['estimatedPositivePregnant'] = null
            row['drugsRequiredNewPatients'] = null
            row['totalDrugsRequired'] = null
            row['notes'] = null
            return row
        })
        newOrder.sort((a, b) => a.order - b.order)
        dispatch(newDrugDetails(newOrder))
    }, [])
    
    return (
        <DrugDetailsGrid order={order} />
    )
}

function DrugDetailsGrid(props) {

    const grid = useRef()
    const dispatch = useDispatch()
    const groupOptions = { columns: ['recommendedFormulations',], showDropArea: false}
    const editOptions = { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Batch' }

    const cellSave = (args) => { 
        dispatch(updateDrugDetails({
            drugId: args.rowData['drugId'],
            column: args.column.headerText,
            value: Number(args.value),}))
    }
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <GridComponent 
                    dataSource={props.order} 
                    allowGrouping={true} 
                    ref={grid}
                    cellSave={cellSave} 
                    allowTextWrap={true}
                    textWrapSettings={{wrapMode: 'Both'}}
                    editSettings={editOptions}
                    groupSettings={groupOptions}>
                    <ColumnsDirective>
                        <ColumnDirective field='recommendedFormulations' width='100' textAlign="Right"/>
                        <ColumnDirective field='drugFormulations' width='300' textAlign="Left"/>
                        <ColumnDirective field='basicUnit' width='100' textAlign="Right"/>
                        <ColumnDirective field='openingBalance' width='100' textAlign="Right"/>
                        <ColumnDirective field='quantityReceived' width='100'/>
                        <ColumnDirective field='ancConsumption' width='100'/>
                        <ColumnDirective field='artConsumption' width='100'/>
                        <ColumnDirective field='lossesAdjustments' width='100'/>
                        <ColumnDirective field='closingBalance' width='100'/>
                        <ColumnDirective field='monthsOfStockOnHand' width='100'/>
                        <ColumnDirective field='quantityRequiredCurrentPatients' width='100'/>
                        <ColumnDirective field='estimatedNewPatients' width='100'/>
                        <ColumnDirective field='estimatedPositivePregnant' width='100'/>
                        <ColumnDirective field='drugsRequiredNewPatients' width='100'/>
                        <ColumnDirective field='totalDrugsRequired' width='100'/>
                        <ColumnDirective field='notes' width='100'/>
                    </ColumnsDirective>
                    <Inject services={[Group, Edit]}/>
                </GridComponent>
            </Grid>
        </Grid>
    )
}
