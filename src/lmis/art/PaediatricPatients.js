import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import {Group, Inject, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import { updatePaediatricPatients, newPaediatricPatients } from '../../redux/lmis/artOrderSlice'
import { artRegimens } from '../../redux/lmis/data'

const { Grid } = require("@mui/material")

export default function PaediatricPatients(props) {
    
    const dispatch = useDispatch()
    const data = useSelector((state) => state.artOrder.paediatricPatients)
    useEffect(() => {
        let newOrder = [...artRegimens]
        newOrder = newOrder.filter((row) => {
            if(row['patient'] === 'Paediatric') {
                return row
            }
        })
        newOrder.map((row) => {
            row['no_existing'] = null
            row['no_new'] = null
            return row
        })
        newOrder.sort((a, b) => a.order - b.order)
        dispatch(newPaediatricPatients(newOrder))
    }, [])
 
    return (
        <PaediatricPatientsGrid order={data} />
    )
}

function PaediatricPatientsGrid(props) {

    const grid = useRef()
    const dispatch = useDispatch()
    const groupOptions = { columns: ['line',], showDropArea: false}
    const editOptions = { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Batch' }

    const cellSave = (args) => { 
        dispatch(updatePaediatricPatients({
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
                        <ColumnDirective field='line' width='100' textAlign="Right"/>
                        <ColumnDirective field='name' width='100' textAlign="Left"/>
                        <ColumnDirective field='no_existing' width='80'/>
                        <ColumnDirective field='no_new' width='80'/>
                    </ColumnsDirective>
                    <Inject services={[Group, Edit]}/>
                </GridComponent>
            </Grid>
        </Grid>
    )
}
