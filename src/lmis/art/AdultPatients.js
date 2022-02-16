import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import {Group, Inject, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import { updateAdultPatients, newAdultPatients } from '../../redux/lmis/artOrderSlice'
import { artRegimens } from '../../redux/lmis/data'

const { Grid } = require("@mui/material")

export default function AdultPatients(props) {
    
    const dispatch = useDispatch()
    const order = useSelector((state) => state.artOrder.adultPatients)
    useEffect(() => {
        dispatch(newAdultPatients([...artRegimens]))
    }, [dispatch])
    
    if(order !== null)
        return (
            <AdultPatientsGrid order={order} />
        )
    else
        return null
}

function AdultPatientsGrid(props) {

    const grid = useRef()
    const dispatch = useDispatch()
    const groupOptions = { columns: ['line',], showDropArea: false}
    const editOptions = { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Batch' }

    const cellSave = (args) => { 
        dispatch(updateAdultPatients({
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
                        <ColumnDirective field='line' headerText='' width='100' textAlign="Right"/>
                        <ColumnDirective field='name' customAttributes={{class:'customcss4'}} headerText='' width='100' textAlign="Left"/>
                        <ColumnDirective field='no_existing' headerText='No. Existing'  width='80' />
                        <ColumnDirective field='no_new' headerText='No. New' width='80'/>
                        <ColumnDirective field='preg_existing' headerText='Pregnant Existing' width='80'/>
                        <ColumnDirective field='preg_new' headerText='Pregnant New' width='80'/>
                    </ColumnsDirective>
                    <Inject services={[Group, Edit]}/>
                </GridComponent>
            </Grid>
        </Grid>
    )
}
