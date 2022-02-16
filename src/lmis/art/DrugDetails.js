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
        const data = [...artDrugs]
        dispatch(newDrugDetails(data))
    }, [dispatch])
    
    if(order !== null)
        return (
            <DrugDetailsGrid order={order} />
        )
    else
        return null
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
                        <ColumnDirective field='recommendedFormulations' headerText='' width='100'/>
                        <ColumnDirective field='drugFormulations' customAttributes={{class:'customcss3'}}  headerText='Drug Formulations' width='300' textAlign="Left"/>
                        <ColumnDirective field='basicUnit' customAttributes={{class:'customcss3'}}  headerText='Basic Unit' width='120' textAlign="Left"/>
                        <ColumnDirective field='openingBalance' headerText='Opening Balance' width='110' textAlign="Left"/>
                        <ColumnDirective field='quantityReceived' headerText='Quantity Received' width='110'/>
                        <ColumnDirective field='ancConsumption' headerText='ANC Consumption' width='110'/>
                        <ColumnDirective field='artConsumption' headerText='ART Consumption' width='110'/>
                        <ColumnDirective field='lossesAdjustments' headerText='Losses / Adjustments' width='110'/>
                        <ColumnDirective field='closingBalance' headerText='Closing Balance' width='110'/>
                        <ColumnDirective field='monthsOfStockOnHand' headerText='Months Of Stock' customAttributes={{class:'customcss'}} width='110'/>
                        <ColumnDirective field='quantityRequiredCurrentPatients' headerText='Quantity Current Patients' customAttributes={{class:'customcss2'}} width='110'/>
                        <ColumnDirective field='estimatedNewPatients' headerText='Estimated New Patients' width='110'/>
                        <ColumnDirective field='estimatedPositivePregnant' headerText='Estimated +Ve Pregnant' width='110'/>
                        <ColumnDirective field='drugsRequiredNewPatients' headerText='Rrugs New Patients' customAttributes={{class:'customcss'}} width='110'/>
                        <ColumnDirective field='totalDrugsRequired' headerText='Total Drugs' customAttributes={{class:'customcss2'}} width='110'/>
                        <ColumnDirective field='notes' headerText='Notes' width='300'/>
                    </ColumnsDirective>
                    <Inject services={[Group, Edit]}/>
                </GridComponent>
            </Grid>
        </Grid>
    )
}
