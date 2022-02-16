import { Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useRef } from 'react'
import { ColumnDirective, ColumnsDirective, GridComponent } from '@syncfusion/ej2-react-grids'
import { Inject, Edit } from '@syncfusion/ej2-react-grids'

import { newItemDetails, updateItemDetails } from '../../redux/lmis/hivTestKitOrderSlice'

export default function TestKitDetails(props) {

    const dispatch = useDispatch()
    
    useEffect(() => {
        if( props.data !== null) {
            dispatch(newItemDetails(props.data))
        }
    }, [dispatch, props.data])
    const order = useSelector((state) => state.hivTestKitOrder.itemDetails)
    if(order !== null)
    return (
        <ItemDetailsGrid order={order} />
    )
    else 
        return null
}

function ItemDetailsGrid(props) {

    const grid = useRef()
    const dispatch = useDispatch()
    
    const editOptions = { allowEditing: true, allowAdding: false, allowDeleting: false, mode: 'Batch' }

    const cellSave = (args) => { 
        dispatch(updateItemDetails({
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
                        <ColumnDirective field='item' customAttributes={{class:'customcss3'}}  headerText='Items' width='300' textAlign="Left"/>
                        <ColumnDirective field='basicUnit' customAttributes={{class:'customcss3'}}  headerText='Basic Unit' width='120' textAlign="Left"/>
                        <ColumnDirective field='testsAvailable' headerText='Tests Available' width='110' textAlign="Left"/>
                        <ColumnDirective field='totalTests' headerText='Total Tests' width='110'/>
                        <ColumnDirective field='usedTests' headerText='Used Tests' width='110'/>
                        <ColumnDirective field='lossesAdjustments' headerText='Losses / Adjusments' width='110'/>
                        <ColumnDirective field='remainingTests' headerText='Tests Remaining' width='110'/>
                        <ColumnDirective field='maxStockQuantity' headerText='Max. Stock Qunatity' customAttributes={{class:'customcss'}} width='110'/>
                        <ColumnDirective field='quantityRequired' headerText='Quantity Required' customAttributes={{class:'customcss'}} width='110'/>
                        <ColumnDirective field='quantityToShip' headerText='Quantity To Ship' width='110'/>
                    </ColumnsDirective>
                    <Inject services={[Edit]}/>
                </GridComponent>
            </Grid>
        </Grid>
    )
}