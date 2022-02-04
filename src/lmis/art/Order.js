import { Button, Container } from '@mui/material'
import { 
    ColumnDirective, ColumnsDirective, GridComponent, 
    Group, GroupSettingsModel, Inject, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react'

import { updateDrugDetails } from '../../redux/lmis/art/orderSlice'

const { Grid } = require("@mui/material")

function Order(props) {

    const grid = useRef()
    const dispatch = useDispatch()
    const order = [useSelector((state) => state.artOrder.drugDetails)]

    const groupOptions = { columns: ['recommendedFormulations',], showDropArea: false}
    const editOptions = { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Batch' }

    const cellSave = (args) => { 
        dispatch(updateDrugDetails({
            order: args.rowData['order'],
            column: args.column.headerText,
            value: Number(args.value),}))
       
        console.log(args)
        console.log(args.rowData['order'], args.rowData['quantityReceived'])
    }
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <GridComponent 
                    dataSource={order[0]} 
                    allowGrouping={true} 
                    ref={grid}
                    cellSave={cellSave} 
                    
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

export default Order