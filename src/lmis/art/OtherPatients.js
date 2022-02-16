import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import { Inject, Edit } from '@syncfusion/ej2-react-grids'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'

import { updateOtherPatients, newOtherPatients } from '../../redux/lmis/artOrderSlice'
import { otherDrugs } from '../../redux/lmis/data'

const { Grid } = require("@mui/material")

export default function OtherPatients(props) {
    
    const dispatch = useDispatch()
    const order = useSelector((state) => state.artOrder.otherPatients)
    useEffect(() => {
        dispatch(newOtherPatients([...otherDrugs]))
    }, [dispatch])
    
    if(order !== null)
        return (
            <PatientsGrid order={order} />
        )
    else
        return null
}

function PatientsGrid(props) {

    const grid = useRef()
    const dispatch = useDispatch()
    const editOptions = { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Batch' }

    const cellSave = (args) => { 
        dispatch(updateOtherPatients({
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
                        <ColumnDirective field='name' headerText='' customAttributes={{class:'customcss4'}} width='200' textAlign="Left"/>
                        <ColumnDirective field='no_existing' headerText='No. Existing'  width='80' />
                        <ColumnDirective field='no_new' headerText='No. New' width='80'/>
                    </ColumnsDirective>
                    <Inject services={[Edit]}/>
                </GridComponent>
            </Grid>
        </Grid>
    )
}
