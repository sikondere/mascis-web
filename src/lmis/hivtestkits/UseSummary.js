import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import { Inject, Edit } from '@syncfusion/ej2-react-grids'

import { newUseSummary, updateUseSummary } from '../../redux/lmis/hivTestKitOrderSlice'

export default function UseSummary(props) {

    const dispatch = useDispatch()
    useEffect(() => {
        if(props.data !== null) { 
            dispatch(newUseSummary(props.data))
        }
    }, [dispatch, props.data])
    const order = useSelector((state) => state.hivTestKitOrder.useSummary)
    if(order !== null)
        return (
            <UseSummaryGrid order={order}/>
        )
    else
        return null
}

function UseSummaryGrid(props) {

    const grid = useRef()
    const dispatch = useDispatch()
    const editOptions = { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Batch' }

    const cellSave = (args) => { 
        dispatch(updateUseSummary({
            drugId: args.rowData['itemId'],
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
                    editSettings={editOptions}>
                    <ColumnsDirective> 
                        <ColumnDirective field='item' customAttributes={{class:'customcss4'}}  headerText='' width='300' textAlign="Left"/>
                        <ColumnDirective field='hct' headerText='HCT' width='110'/>
                        <ColumnDirective field='PMTCTeMTCT' headerText='PMTCT/eMTCT' width='110'/>
                        <ColumnDirective field='ClinicalDiagnosis' headerText='Clinical Diagnosis' width='110'/>
                        <ColumnDirective field='smc' headerText='SMC' width='110'/> 
                        <ColumnDirective field='QualityControl' headerText='Quality Control' width='110'/> 
                    </ColumnsDirective>
                    <Inject services={[Edit]}/>
                </GridComponent>
            </Grid>
        </Grid>
    )
}