import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import {Group, Inject, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import { updateAdultPatients, newAdultPatients } from '../../redux/lmis/artOrderSlice'
import { artRegimens } from '../../redux/lmis/data'

const { Grid } = require("@mui/material")

export default function AdultPatients(props) {
    
    const dispatch = useDispatch()
    const adultPatients = useSelector((state) => state.artOrder.adultPatients)
    useEffect(() => {
        let newOrder = [...artRegimens]
        newOrder = newOrder.filter((row) => {
            if(row['patient'] === 'Adult') {
                return row
            }
        })
        newOrder.map((row) => {
            row['no_existing'] = null
            row['no_new'] = null
            row['preg_existing'] = null
            row['preg_new'] = null
            return row
        })
        newOrder.sort((a, b) => a.order - b.order)
        dispatch(newAdultPatients(newOrder))
    }, [])
    
    return (
        <AdultPatientsGrid order={adultPatients} />
    )
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
                        <ColumnDirective field='name' headerText='' width='100' textAlign="Left"/>
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
