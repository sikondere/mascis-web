import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import { Inject, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import { updateFluconazolePatients, newFluconazolePatients } from '../../redux/lmis/artOrderSlice'
import { fluconazole } from '../../redux/lmis/data'

const { Grid } = require("@mui/material")

export default function FluconazolePatients(props) {
    
    const dispatch = useDispatch()
    const data = useSelector((state) => state.artOrder.fluconazolePatients)
    useEffect(() => {
        let newOrder = [...fluconazole]
        newOrder.map((row) => {
            row['no_existing'] = null
            row['no_new'] = null
            return row
        })
        newOrder.sort((a, b) => a.order - b.order)
        dispatch(newFluconazolePatients(newOrder))
    }, [])
    
    return (
        <PatientsGrid order={data} />
    )
}

function PatientsGrid(props) {

    const grid = useRef()
    const dispatch = useDispatch() 
    const editOptions = { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Batch' }

    const cellSave = (args) => { 
        dispatch(updateFluconazolePatients({
            drugId: args.rowData['drugId'],
            column: args.column.headerText,
            value: Number(args.value),}))
    }
    
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <GridComponent 
                    dataSource={props.order} 
                    ref={grid}
                    cellSave={cellSave} 
                    allowTextWrap={true}
                    textWrapSettings={{wrapMode: 'Both'}}
                    editSettings={editOptions}>
                    <ColumnsDirective> 
                        <ColumnDirective field='condition' width='200' headerText='Condition' textAlign="Left"/>
                        <ColumnDirective field='no_existing' headerText='No. Existing'  width='80' />
                        <ColumnDirective field='no_new' headerText='No. New' width='80'/>
                    </ColumnsDirective>
                    <Inject services={[Edit]}/>
                </GridComponent>
            </Grid>
        </Grid>
    )
}
